'use client';

import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import GlassBentoGrid from '@/components/GlassBentoGrid';
import TopicViewer from '@/components/TopicViewer';
import { Topic, knowledgeData } from '@/data/knowledge_data';
import { useLanguage } from '@/contexts/LanguageContext';

import BaseFooter from '@/components/BaseFooter';

export default function JourneyPage() {
    const { language } = useLanguage();
    const router = useRouter();
    const searchParams = useSearchParams();
    const topicId = searchParams.get('topic');

    const selectedTopic = knowledgeData.find(t => t.id === topicId) || null;

    const handleTopicSelect = (topic: Topic) => {
        router.push(`/journey?topic=${topic.id}`);
    };

    const handleClose = () => {
        router.push('/journey');
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
                    isBlurred={!!selectedTopic}
                />
            </motion.div>

            <BaseFooter className="mt-12" />

            <TopicViewer
                topic={selectedTopic}
                onClose={handleClose}
            />
        </div>
    );
}
