'use client';

import { motion } from 'framer-motion';
import { Topic, knowledgeData } from '@/data/knowledge_data';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUpRight, Cpu, Globe, Rocket, Terminal, Box, Cloud, Server, Code } from 'lucide-react';

interface GlassBentoGridProps {
    onTopicSelect: (topic: Topic) => void;
    isBlurred?: boolean;
}

const arrowIcon = ArrowUpRight;

// Map IDs to Icons for visual flair
const iconMap: Record<string, any> = {
    mindset: Rocket,
    hardware: Cpu,
    network: Globe,
    tools: Terminal,
    nextjs: Code,
    serverless: Cloud,
    remote: Server,
    docker: Box, // Duplicate but generic
    cicd: arrowIcon,
};

export default function GlassBentoGrid({ onTopicSelect, isBlurred = false }: GlassBentoGridProps) {
    const { t } = useLanguage();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-4 mt-8 pb-20 ${isBlurred ? 'pointer-events-none' : ''}`}
        >
            {knowledgeData.map((topic) => {
                // Dynamic Icon Logic
                const Icon = iconMap[topic.id] || ArrowUpRight;

                return (
                    <motion.div
                        key={topic.id}
                        variants={item}
                        onClick={() => onTopicSelect(topic)}
                        className={`
              glass-card group cursor-pointer p-6 flex flex-col justify-between relative overflow-hidden
              ${topic.colSpan === 2 ? 'col-span-2' : 'col-span-1'}
              ${topic.rowSpan === 2 ? 'row-span-2 min-h-[360px]' : 'min-h-[200px]'}
              transform-gpu backface-hidden will-change-transform
            `}
                        whileHover={!isBlurred ? { y: -5 } : {}}
                        whileTap={!isBlurred ? { scale: 0.98 } : {}}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {/* Subtle Gradient Background per Phase */}
                        <div className={`absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20
              ${topic.phase === 'launch' ? 'bg-gradient-to-br from-purple-500 to-transparent' : ''}
              ${topic.phase === 'gear' ? 'bg-gradient-to-br from-blue-500 to-transparent' : ''}
              ${topic.phase === 'build' ? 'bg-gradient-to-br from-pink-500 to-transparent' : ''}
              ${topic.phase === 'expedition' ? 'bg-gradient-to-br from-cyan-500 to-transparent' : ''}
            `} />

                        {/* Top Row: Phase + Icon */}
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <span className={`
                text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 rounded-full border backdrop-blur-md
                ${topic.phase === 'launch' ? 'border-purple-500/30 text-purple-200 bg-purple-500/10' : ''}
                ${topic.phase === 'gear' ? 'border-blue-500/30 text-blue-200 bg-blue-500/10' : ''}
                ${topic.phase === 'build' ? 'border-pink-500/30 text-pink-200 bg-pink-500/10' : ''}
                ${topic.phase === 'expedition' ? 'border-cyan-500/30 text-cyan-200 bg-cyan-500/10' : ''}
              `}>
                                {t(`phase.${topic.phase}`)}
                            </span>
                            <div className="p-2 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/20 transition-all duration-500 shadow-inner">
                                <Icon className="w-5 h-5 text-white/70 group-hover:text-white" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="mt-auto relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                                {t(`${topic.translationKey}.title`)}
                            </h3>
                            <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed group-hover:text-gray-200 transition-colors">
                                {t(`${topic.translationKey}.desc`)}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
