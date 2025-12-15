import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export async function getTopicContent(language: 'en' | 'cn', topicId: string) {
    const fullPath = path.join(contentDirectory, language, `${topicId}.md`);

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        return {
            metadata: data,
            content
        };
    } catch (err) {
        console.error(`Error reading markdown for ${language}/${topicId}:`, err);
        // Fallback to English if CN is missing, or return error text
        return {
            metadata: { title: 'Not Found' },
            content: '# Content Not Found\nSorry, this topic is not yet available in your language.'
        };
    }
}
