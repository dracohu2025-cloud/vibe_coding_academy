import { NextResponse } from 'next/server';
import { wikis } from '@/velite';

export async function GET(request: Request, { params }: { params: Promise<{ lang: string; id: string }> }) {
    const { lang, id } = await params;

    // Velite generates a flat array of all wikis
    // We match by the computed 'lang' and 'slug' fields
    const wiki = wikis.find(w => w.lang === lang && w.slug.toLowerCase() === id.toLowerCase());

    if (!wiki) {
        return NextResponse.json(
            {
                metadata: { title: 'Not Found', phase: 'Error' },
                content: `# Not Found\n\nTopic '${id}' not found in '${lang}'.`
            },
            { status: 404 }
        );
    }

    // Map Velite object to the shape expected by frontend
    // Frontend expects { metadata: { title, phase, ... }, content: string }
    const metadata = {
        title: wiki.title,
        phase: wiki.phase,
        ...wiki.metadata // Include any extra metadata captured
    };

    return NextResponse.json({ metadata, content: wiki.content });
}
