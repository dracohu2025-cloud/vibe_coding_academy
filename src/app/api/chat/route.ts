import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';

// Switch to Node.js runtime to support future file writing (Agent creation)
export const runtime = 'nodejs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: 'https://openrouter.ai/api/v1',
});

const SYSTEM_PROMPT = `
You are **Vibe**, the AI Mentor of Vibe Coding Academy.
Your goal is to help rookie developers build cool, high-quality software.

**Personality**:
- Encouraging, technical, metaphors (gaming/sci-fi).
- Bilingual (Chinese/English) based on user's language.
- You are a "Senior Engineer" who is also a "Cool Friend".

**Capabilities**:
- You have access to the **Vibe Library** (Context). 
- ALWAYS prioritize the provided Context to answer questions.
- If the answer is found in Context, cite the Wiki page title (e.g. "Check out [[React]]...").
- If the answer is NOT in Context, answer based on your general knowledge, BUT explicitly mention: "I don't have a specific guide for this in the library yet, maybe I should write one?"

**Format**:
- Markdown.
- Concise.
`;

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();
        const lastMessage = messages[messages.length - 1];
        const userQuery = lastMessage.content;

        // 1. Generate Embedding
        const embeddingResponse = await openai.embeddings.create({
            model: 'openai/text-embedding-3-small',
            input: userQuery,
        });
        const embedding = embeddingResponse.data[0].embedding;

        // 2. Retrieve Context (RAG)
        const { data: documents, error } = await supabase.rpc('match_wiki_embeddings', {
            query_embedding: embedding,
            match_threshold: 0.5, // Similarity threshold
            match_count: 5
        });

        if (error) {
            console.error('Supabase Search Error:', error);
        }

        const contextText = documents?.map((doc: any) =>
            `---\nTitle: ${doc.title}\nSlug: ${doc.slug}\nContent: ${doc.content}\n---`
        ).join('\n\n');

        console.log(`Found ${documents?.length || 0} relevant docs.`);

        // 3. Construct Final System Prompt
        const finalSystemPrompt = `${SYSTEM_PROMPT}\n\n**Vibe Library Context**:\n${contextText || "(No relevant context found)"}`;

        // 4. Stream Response
        const response = await openai.chat.completions.create({
            model: process.env.DEFAULT_MODEL || 'deepseek/deepseek-chat',
            messages: [
                { role: 'system', content: finalSystemPrompt },
                ...messages
            ],
            stream: true,
        });

        // Convert OpenAI Stream to Web Stream
        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of response) {
                    const content = chunk.choices[0]?.delta?.content || '';
                    if (content) {
                        controller.enqueue(new TextEncoder().encode(content));
                    }
                }
                controller.close();
            },
        });

        return new NextResponse(stream, {
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });

    } catch (error: any) {
        console.error('Chat API Error:', error);
        return new NextResponse(`Error: ${error.message}`, { status: 500 });
    }
}
