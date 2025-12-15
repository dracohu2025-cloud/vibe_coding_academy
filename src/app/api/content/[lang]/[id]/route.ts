import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: Promise<{ lang: string; id: string }> }) {
    const { lang, id } = await params;
    const contentDirectory = path.join(process.cwd(), 'src/content');
    const fullPath = path.join(contentDirectory, lang, `${id}.md`);

    try {
        console.log('API Debug: Looking for content');
        console.log('CWD:', process.cwd());
        console.log('Target Path:', fullPath);

        if (!fs.existsSync(fullPath)) {
            console.error('File not found at path:', fullPath);
            // Try listing the content directory to see what IS there
            if (fs.existsSync(contentDirectory)) {
                console.log('Content directory listing:', fs.readdirSync(contentDirectory));
                const langDir = path.join(contentDirectory, lang);
                if (fs.existsSync(langDir)) {
                    console.log(`Listing for ${lang}:`, fs.readdirSync(langDir));
                }
            } else {
                console.error('Content directory does not exist:', contentDirectory);
            }
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        return NextResponse.json({ metadata: data, content });
    } catch (err: any) {
        console.error('Error reading file:', err);
        return NextResponse.json(
            { metadata: { title: 'Not Found' }, content: `# Not Found\nThis topic is under construction.\n\nDebug Info:\nPath: ${fullPath}\nError: ${err.message}` },
            { status: 404 }
        );
    }
}
