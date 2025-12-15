'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassBentoGrid from '@/components/GlassBentoGrid';
import TopicViewer from '@/components/TopicViewer';
import { Topic } from '@/data/knowledge_data';
import { useLanguage } from '@/contexts/LanguageContext';

export default function JourneyPage() {
    const { language } = useLanguage();
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

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
                    onTopicSelect={setSelectedTopic}
                    isBlurred={!!selectedTopic}
                />
            </motion.div>

            <TopicViewer
                topic={selectedTopic}
                onClose={() => setSelectedTopic(null)}
            />
        </div>
    );
}
