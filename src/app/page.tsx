'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import KnowledgeMap from '@/components/KnowledgeMap';
import TopicViewer from '@/components/TopicViewer';
import { Topic } from '@/data/knowledge_data';

export default function Home() {
    const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
    const [showMap, setShowMap] = useState(false);

    return (
        <div className="min-h-screen p-4 md:p-8 md:max-w-7xl mx-auto flex flex-col">
            <nav className="flex justify-between items-center py-6">
                <div className="font-bold text-xl tracking-tighter">VIBE_ROOKIE</div>
                <div className="flex gap-4 text-sm font-mono text-gray-400">
                    <span>v1.0.0</span>
                    <span>// EST. 2025</span>
                </div>
            </nav>

            <main className="flex-grow flex flex-col justify-center">
                {!showMap ? (
                    <HeroSection onStart={() => setShowMap(true)} />
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                Knowledge Constellation
                            </h2>
                            <p className="text-gray-400">Select a node to access the data.</p>
                        </div>
                        <KnowledgeMap onTopicSelect={setSelectedTopic} />
                    </motion.div>
                )}
            </main>

            <TopicViewer
                topic={selectedTopic}
                onClose={() => setSelectedTopic(null)}
            />

            <footer className="py-8 text-center text-gray-600 text-sm font-mono">
                <p>BUILT WITH NEXT.JS & VIBE. © 2025</p>
            </footer>
        </div>
    );
}
