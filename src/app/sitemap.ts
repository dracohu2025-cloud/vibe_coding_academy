import { knowledgeData } from '@/data/knowledge_data';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://vibe-coding-academy.vercel.app'; // Update with your actual domain

    const routes = [
        '',
        '/journey',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1,
    }));

    const topicRoutes = knowledgeData.map((topic) => ({
        url: `${baseUrl}/journey?topic=${topic.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Add Wiki entries if we have a list, typically we'd fetch these.
    // For now, we rely on the main topic entries.

    return [...routes, ...topicRoutes];
}
