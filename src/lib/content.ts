import { wikis } from '@/velite';

export async function getTopicContent(language: 'en' | 'cn', topicId: string) {
    // Find the wiki entry that matches the slug and language
    // Velite has already parsed the content and frontmatter
    const wiki = wikis.find(w => w.slug === topicId && w.lang === language);

    if (wiki) {
        return {
            metadata: {
                title: wiki.title,
                phase: wiki.phase,
                ...wiki.metadata
            },
            content: wiki.content // In velite.config.ts, we mapped 'content' to 'raw' markdown
        };
    }

    console.error(`Wiki not found for ${language}/${topicId}`);

    // Fallback: Try to find English version if CN is missing? 
    // For now, consistent behavior with previous version: return Not Found.
    return {
        metadata: { title: 'Not Found' },
        content: '# Content Not Found\nSorry, this topic is not yet available in your language.'
    };
}
