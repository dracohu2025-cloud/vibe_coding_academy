import { NextResponse } from 'next/server';
import { wikis } from '@/velite';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q')?.toLowerCase() || '';
    const lang = searchParams.get('lang') || 'en';

    if (!query) {
        return NextResponse.json([]);
    }

    // Simple robust search
    const results = wikis
        .filter(w => w.lang === lang)
        .filter(w => {
            const inTitle = w.title?.toLowerCase().includes(query);
            const inSlug = w.slug.toLowerCase().includes(query);
            // Search content (limit length to avoid massive scan if possible, but for now full scan is okay for small wiki)
            const inContent = w.content?.toLowerCase().includes(query);
            return inTitle || inSlug || inContent;
        })
        .map(w => ({
            id: w.slug,
            title: w.title || w.slug,
            snippet: w.content?.substring(0, 100) + '...' // Basic snippet
        }))
        .slice(0, 5); // Limit results

    return NextResponse.json(results);
}
