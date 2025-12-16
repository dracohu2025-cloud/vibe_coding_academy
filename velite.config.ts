import { defineConfig, defineCollection, s } from 'velite'

// Define the Wiki collection
const wikis = defineCollection({
    name: 'Wiki', // Collection name
    pattern: 'src/content/**/*.md', // File pattern
    schema: s
        .object({
            title: s.string().optional(),
            phase: s.string().optional(),
            metadata: s.record(s.string(), s.any()).optional(), // Catch-all for other frontmatter
            content: s.markdown(), // Transform markdown to HTML (using internal processor or raw)
            // We essentially want the raw content or compiled HTML. 
            // s.markdown() returns HTML string by default? 
            // Actually standard velite s.markdown() returns html. 
            // But we are using react-markdown in the frontend which expects Markdown string.
            // So we should use s.raw() or custom transform if we want to keep using react-markdown.
            // However, Velite is powerful because it can give us compiled HTML (rehype/remark).
            // The user wants "Velite" to replace "fs".
            // If we use s.markdown(), we get HTML. We would need to replace <ReactMarkdown> with <div dangerouslySetInnerHTML> or similar,
            // OR we can just use s.mdx() if we want components.
            // BUT `TopicViewer.tsx` uses `ReactMarkdown`.
            // To minimize UI changes (preserve TopicViewer logic), we should pass the RAW markdown content to the frontend.
            // So let's use `s.raw()` for the content, or just a custom field.
            // Wait, `s.markdown()` compiles it. 
            // Let's use `raw` field to get the original content.
            raw: s.raw()
        })
        .transform((data, { meta }) => {
            const pathParts = meta.path.split('/');
            // Locate 'src/content' or just 'content' to be safe
            // We assume structure is .../content/[lang]/[slug].md
            const contentIndex = pathParts.lastIndexOf('content');
            const lang = (contentIndex !== -1 && pathParts[contentIndex + 1]) ? pathParts[contentIndex + 1] : 'en';

            return {
                ...data,
                lang,
                slug: pathParts.pop()?.replace('.md', '') || '',
                content: data.raw
            };
        })
})

export default defineConfig({
    root: process.cwd(),
    collections: {
        wikis
    },
    markdown: {
        // We can configure rehype/remark here if we decide to pre-compile later
        copyLinkedFiles: false,
    }
})
