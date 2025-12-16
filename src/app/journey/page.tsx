'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import GlassBentoGrid from '@/components/GlassBentoGrid';
import TopicViewer from '@/components/TopicViewer';
import { Topic, knowledgeData } from '@/data/knowledge_data';
import { useLanguage } from '@/contexts/LanguageContext';

import BaseFooter from '@/components/BaseFooter';

// ... (imports)

function JourneyContent() {
    const { language } = useLanguage();
    const router = useRouter();
    const searchParams = useSearchParams();
    const topicId = searchParams.get('topic');

    // Find topic object if it exists (for initial metadata like phase colors), but we rely on topicId for open state
    const selectedTopic = topicId ? (knowledgeData.find(t => t.id === topicId) || null) : null;

    const handleTopicSelect = (topic: Topic) => {
        router.push(`/journey?topic=${topic.id}`);
    };

    const handleClose = () => {
        router.push('/journey');
    };

    const handleNavigate = (id: string) => {
        router.push(`/journey?topic=${id}`);
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 md:max-w-7xl mx-auto flex flex-col">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex-grow w-full"
            >
                <div className="container mx-auto px-4 mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-300 inline-block">
                        {language === 'en' ? 'Knowledge Matrix' : 'Vibe 知识矩阵'}
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        {language === 'en'
                            ? 'Explore the universe of modern development.'
                            : '探索现代开发的宇宙。'}
                    </p>
                </div>

                <GlassBentoGrid
                    onTopicSelect={handleTopicSelect}
                    isBlurred={!!topicId}
                />
            </motion.div>

            <BaseFooter className="mt-12" />

            <TopicViewer
                topicId={topicId}
                topic={selectedTopic}
                onClose={handleClose}
                onNavigate={handleNavigate}
            />
        </div>
    );
}

export default function JourneyPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#0a0a0c]" />}>
            <JourneyContent />
        </Suspense>
    );
}
