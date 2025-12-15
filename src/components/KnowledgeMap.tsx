'use client';

import { motion } from 'framer-motion';
import { Topic, knowledgeData } from '@/data/knowledge_data';

interface KnowledgeMapProps {
    onTopicSelect: (topic: Topic) => void;
}

export default function KnowledgeMap({ onTopicSelect }: KnowledgeMapProps) {
    return (
        <div className="relative w-full h-[600px] md:h-[800px] bg-black/20 rounded-3xl border border-white/5 backdrop-blur-sm overflow-hidden my-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_70%)]" />

            {/* Grid Lines */}
            <div className="absolute inset-0"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {knowledgeData.map((topic, index) => (
                <motion.button
                    key={topic.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(120,119,198,0.5)" }}
                    onClick={() => onTopicSelect(topic)}
                    className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full glass flex flex-col items-center justify-center p-2 group cursor-pointer border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors"
                    style={{
                        left: `${topic.x}%`,
                        top: `${topic.y}%`,
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <div className="text-2xl mb-1 group-hover:scale-125 transition-transform duration-300">
                        {topic.phase === 'launch' && '🚀'}
                        {topic.phase === 'gear' && '🛠️'}
                        {topic.phase === 'build' && '⚡'}
                        {topic.phase === 'expedition' && '🌌'}
                    </div>
                    <div className="text-xs md:text-sm font-bold text-center text-white/90 group-hover:text-white">
                        {topic.title.split(' ')[0]}
                    </div>
                </motion.button>
            ))}

            {/* Connection Lines (Simple visual decoration) */}
            <svg className="absolute inset-0 pointer-events-none opacity-20">
                {knowledgeData.map((start, i) => {
                    if (i === knowledgeData.length - 1) return null;
                    const end = knowledgeData[i + 1];
                    // Only connect if they are somewhat close in our arbitrary list order logic
                    // or better, just connect them sequentially to show a "path"
                    return (
                        <line
                            key={i}
                            x1={`${start.x}%`}
                            y1={`${start.y}%`}
                            x2={`${end.x}%`}
                            y2={`${end.y}%`}
                            stroke="white"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                        />
                    );
                })}
            </svg>
        </div>
    );
}
