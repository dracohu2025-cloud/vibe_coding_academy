import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ lang: string; id: string }> }) {
    const { lang, id } = await params;
    const contentDirectory = path.join(process.cwd(), 'src/content');
    const fullPath = path.join(contentDirectory, lang, `${id}.md`);

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        return NextResponse.json({ metadata: data, content });
    } catch (err) {
        return NextResponse.json(
            { metadata: { title: 'Not Found' }, content: '# Not Found\nThis topic is under construction.' },
            { status: 404 }
        );
    }
}
