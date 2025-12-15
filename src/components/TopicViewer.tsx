'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Topic } from '@/data/knowledge_data';

interface TopicViewerProps {
    topic: Topic | null;
    onClose: () => void;
}

export default function TopicViewer({ topic, onClose }: TopicViewerProps) {
    return (
        <AnimatePresence>
            {topic && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />
                    <motion.div
                        initial={{ x: '100%', opacity: 0.5 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0.5 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full md:w-[600px] lg:w-[800px] bg-[#0a0a0c] border-l border-white/10 shadow-2xl z-50 overflow-y-auto"
                    >
                        <div className="p-8">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6 text-white/70" />
                            </button>

                            <div className="mt-8 prose prose-invert prose-lg max-w-none">
                                <div className="mb-4 text-sm font-mono text-[rgb(var(--primary))] uppercase tracking-widest">
                                    Phase: {topic.phase.toUpperCase()}
                                </div>
                                {/* Note: In a real app we might use a proper markdown renderer here. 
                    For now, we render the raw content but styled nicely via CSS found in globals.css 
                    or we can parse it simply. Since the user asked for simple, we assume raw text or simple parser.
                    Actually, let's just display it. For better UX, let's do a simple split render.
                */}
                                <div
                                    className="markdown-content"
                                    dangerouslySetInnerHTML={{
                                        // Very simple markdown to HTML conversion for the demo
                                        // In production, use 'react-markdown' or 'remark'
                                        __html: topic.content
                                            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                                            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                                            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                                            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
                                            .replace(/\n\n/gim, '<br/><br/>')
                                            .replace(/`([^`]+)`/g, '<code>$1</code>')
                                            .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
                                            .replace(/\* (.*$)/gim, '<li>$1</li>')
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
