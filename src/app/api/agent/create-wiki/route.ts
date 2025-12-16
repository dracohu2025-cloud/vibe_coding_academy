import { NextRequest, NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';
import OpenAI from 'openai';

// NodeJS runtime for Octokit
export const runtime = 'nodejs';

// Config
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER;
const GITHUB_REPO = process.env.GITHUB_REPO; // vibe_coding_academy
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

// Init Clients
// Clients will be initialized in the handler


const SYSTEM_PROMPT = `
You are **Vibe**, the content creator for Vibe Coding Academy.
Your task is to write a **"Nanny-level" Tutorial** (Wiki Page) for a given topic.

**Style Guide**:
- **Tone**: Professional yet cool. "Senior Engineer" friend.
- **Language**: English or Chinese (matches user request).
- **Structure**:
  1. Title (Frontmatter)
  2. Hook (Why should I care?)
  3. Concept (The "Aha!" moment metaphor)
  4. Step-by-Step (How to do it)
  5. Best Practices (Vibe Tips)
- **Frontmatter**:
---
title: "Wiki Title"
phase: "wiki"
---
`;

export async function POST(req: NextRequest) {
    if (!GITHUB_TOKEN) {
        return new NextResponse('Missing GITHUB_TOKEN', { status: 500 });
    }

    try {
        // Init Clients (Lazy)
        if (!process.env.OPENROUTER_API_KEY || !process.env.GITHUB_TOKEN) {
            throw new Error('Missing OPENROUTER_API_KEY or GITHUB_TOKEN');
        }

        const openai = new OpenAI({
            apiKey: process.env.OPENROUTER_API_KEY,
            baseURL: 'https://openrouter.ai/api/v1',
        });

        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN,
        });

        const { topic, lang = 'en' } = await req.json();

        // 1. Generate Content
        console.log(`Generating wiki for: ${topic} [${lang}]`);
        const completion = await openai.chat.completions.create({
            model: process.env.DEFAULT_MODEL || 'deepseek/deepseek-chat',
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                { role: 'user', content: `Topic: ${topic}\nLanguage: ${lang === 'cn' ? 'Simplified Chinese' : 'English'}` }
            ]
        });

        const content = completion.choices[0].message.content || '';
        const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
        const filename = `wiki_${slug}.md`;
        const path = `src/content/${lang}/${filename}`;

        // 2. Commit to GitHub
        console.log(`Committing to GitHub: ${path}`);

        // Check if file exists to get SHA (for update) or null (for create)
        let sha: string | undefined;
        try {
            const { data } = await octokit.repos.getContent({
                owner: GITHUB_OWNER!,
                repo: GITHUB_REPO!,
                path,
            });
            if (!Array.isArray(data) && data.sha) {
                sha = data.sha;
            }
        } catch (e) {
            // File doesn't exist, ignore
        }

        await octokit.repos.createOrUpdateFileContents({
            owner: GITHUB_OWNER!,
            repo: GITHUB_REPO!,
            path,
            message: `feat(wiki): Vibe Agent created ${filename}`,
            content: Buffer.from(content).toString('base64'),
            sha, // If defined, it Updates through overwrite. If undefined, Creates.
        });

        return NextResponse.json({
            success: true,
            path,
            url: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/blob/main/${path}`,
            slug
        });

    } catch (error: any) {
        console.error('Agent Creation Error:', error);
        return new NextResponse(`Error: ${error.message}`, { status: 500 });
    }
}
