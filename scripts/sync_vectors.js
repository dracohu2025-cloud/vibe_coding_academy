require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const OpenAI = require('openai');
const matter = require('gray-matter');

const contentDir = path.join(process.cwd(), 'src/content');

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// OpenRouter Configuration
const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: 'https://openrouter.ai/api/v1',
});

// Helper: Get Embedding
async function getEmbedding(text) {
    try {
        const response = await openai.embeddings.create({
            model: 'openai/text-embedding-3-small', // Use standard OpenAI model via OpenRouter
            input: text,
            encoding_format: 'float'
        });
        return response.data[0].embedding;
    } catch (error) {
        console.error('Error fetching embedding:', error.message);
        // Fallback or retry? For now, throw.
        throw error;
    }
}

// Helper: Recursively get files
function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file));
        } else {
            if (file.endsWith('.md')) {
                results.push(file);
            }
        }
    });
    return results;
}

async function sync() {
    console.log('🔄 Connecting to Supabase...');

    // 1. Clear existing data (Full Refresh Strategy)
    const { error: deleteError } = await supabase.from('wiki_embeddings').delete().neq('id', 0); // Delete all
    if (deleteError) {
        console.error('Error clearing table:', deleteError);
        // If error is RLS related, we might need Service Key. But let's try.
        // If table is empty or non-existent, this might be fine.
    } else {
        console.log('🗑️  Cleared existing embeddings.');
    }

    const files = getFiles(contentDir);
    console.log(`📂 Found ${files.length} markdown files.`);

    for (const file of files) {
        const content = fs.readFileSync(file, 'utf-8');
        const { data, content: markdownBody } = matter(content);

        // Skip if no content
        if (!markdownBody.trim()) continue;

        // Determine Lang and Slug from path
        // path: .../src/content/cn/wiki_foo.md
        const parts = file.split('/');
        const langInfo = parts[parts.length - 2];
        const filename = parts[parts.length - 1];
        const slug = filename.replace('.md', '');

        console.log(`Processing: [${langInfo}] ${slug}`);

        // Simple Chunking Strategy: Split by "## " (H2 headers)
        // This keeps context reasonably well for a wiki.
        const chunks = markdownBody.split(/^## /m);

        for (let i = 0; i < chunks.length; i++) {
            let chunkText = chunks[i].trim();
            if (!chunkText) continue;

            // Re-add header if it was split (regex consumes it)
            // Actually split consumes the separator. We should probably prepend title if we can.
            // For the first chunk (preamble), it might not have ##.
            // For others, we assume they started with ##. 
            // Better: just embed the text. Vector search is fuzzy.

            // Limit chunk size roughly? OpenRouter limit is 8k tokens usually.
            // We just truncate if too long?
            if (chunkText.length > 8000) chunkText = chunkText.substring(0, 8000);

            // Construct metadata
            const metadata = {
                title: data.title || slug,
                lang: langInfo,
                phase: data.phase,
                chunk_index: i
            };

            // Enhance text for embedding: "Title: ... Content: ..."
            const textToEmbed = `Title: ${data.title}\nContent: ${chunkText}`;

            try {
                const embedding = await getEmbedding(textToEmbed);

                // Insert
                const { error } = await supabase.from('wiki_embeddings').insert({
                    slug,
                    title: data.title,
                    content: chunkText, // Store raw text for retrieval
                    metadata,
                    embedding
                });

                if (error) console.error(`Failed to insert chunk ${i}:`, error.message);

            } catch (e) {
                console.error(`Skipping chunk ${i} of ${slug} due to error.`);
            }

            // Rate limit safety
            await new Promise(r => setTimeout(r, 200));
        }
    }

    console.log('✅ Sync Complete!');
}

sync().catch(console.error);
