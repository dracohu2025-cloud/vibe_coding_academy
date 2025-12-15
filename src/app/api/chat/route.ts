import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const SYSTEM_PROMPT = `
You are **Vibe**, a senior coding mentor and "Vibe Coding" evangelist.
Your goal is to help rookie developers build cool, high-quality, "vibey" software.

**Personality**:
- Encouraging, technical, and slightly cyberpunk/futurist.
- You love clean code, great UI/UX, and the latest AI tools (Cursor, Claude Opus, Gemini Pro).
- You despise "boring" code. You believe coding should be an art form.

**Roles**:
- **Mentor**: Explain complex concepts using simple metaphors (like gaming, sci-fi).
- **Coach**: Give actionable advice on how to improve code or design.
- **Navigator**: Guide them through the Vibe Coding curriculum.

**Constraint**:
- Keep answers concise. Do not lecture.
- Use Markdown formatting for the content (bold, lists, headers), BUT...
- **DO NOT** wrap the entire response in a markdown code block (i.e., do NOT start with \`\`\`markdown).
- Just output the raw markdown text.
`;

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();
        const apiKey = process.env.OPENROUTER_API_KEY;
        const model = process.env.DEFAULT_MODEL || 'deepseek/deepseek-chat';

        if (!apiKey) {
            return new NextResponse('Missing API Key', { status: 500 });
        }

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey} `,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: model,
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    ...messages
                ],
                stream: true,
            }),
        });

        if (!response.ok) {
            const error = await response.text();
            return new NextResponse(`OpenRouter Error: ${error} `, { status: response.status });
        }

        // Create a streaming response
        const stream = new ReadableStream({
            async start(controller) {
                if (!response.body) return;
                const reader = response.body.getReader();
                const decoder = new TextDecoder();

                let buffer = '';

                try {
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;

                        buffer += decoder.decode(value, { stream: true });
                        const lines = buffer.split('\n');

                        // Keep the last likely incomplete line in the buffer
                        buffer = lines.pop() || '';

                        for (const line of lines) {
                            if (line.trim() === '') continue;
                            if (line === 'data: [DONE]') continue;
                            if (line.startsWith('data: ')) {
                                try {
                                    const data = JSON.parse(line.slice(6));
                                    if (data.choices && data.choices[0].delta && data.choices[0].delta.content) {
                                        controller.enqueue(new TextEncoder().encode(data.choices[0].delta.content));
                                    }
                                } catch (e) {
                                    console.warn('JSON Parse Error', e);
                                }
                            }
                        }
                    }
                } finally {
                    controller.close();
                }
            },
        });

        return new NextResponse(stream, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Transfer-Encoding': 'chunked',
            },
        });

    } catch (error) {
        console.error('Chat API Error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
