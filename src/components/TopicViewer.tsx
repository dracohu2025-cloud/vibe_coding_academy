'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Topic } from '@/data/knowledge_data';
import { useLanguage } from '@/contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

interface TopicViewerProps {
    topicId: string | null;
    topic: Topic | null;
    onClose: () => void;
    onNavigate: (id: string) => void;
}

export default function TopicViewer({ topicId, topic, onClose, onNavigate }: TopicViewerProps) {
    const { language, t } = useLanguage();
    const router = useRouter();
    const [metadata, setMetadata] = useState<any>(null);
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(false);

    // Fetch content when topicId changes
    useEffect(() => {
        if (!topicId) {
            document.body.style.overflow = 'unset';
            return;
        }

        document.body.style.overflow = 'hidden';
        setLoading(true);
        setMetadata(null); // Reset metadata

        // If simple topic, maybe use topic prop data first? 
        // We will just fetch. The fetch is fast.

        fetch(`/api/content/${language}/${topicId}`)
            .then(res => res.json())
            .then(data => {
                setContent(data.content);
                setMetadata(data.metadata);
                setLoading(false);
            })
            .catch(() => {
                setContent('# Error loading content');
                setLoading(false);
            });
    }, [topicId, language]);


    // Helper to get display phase
    const getDisplayPhase = () => {
        if (metadata?.phase) return metadata.phase;
        if (topic) return topic.phase;
        return 'WIKI';
    };

    // Process [[Wiki]] syntax
    const processedContent = useMemo(() => {
        if (!content) return '';
        // Replace [[Term]] with [Term](wiki:wiki_term_normalized)
        return content.replace(/\[\[(.*?)\]\]/g, (match, term) => {
            const normalized = 'wiki_' + term.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
            return `[${term}](wiki:${normalized})`;
        });
    }, [content]);

    // Memoize markdown components
    const markdownComponents = useMemo(() => ({
        h1: ({ node, ...props }: any) => <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-8 tracking-tighter" {...props} />,
        h2: ({ node, ...props }: any) => <h2 className="text-2xl md:text-3xl font-bold text-pink-200 mt-12 mb-6 flex items-center" {...props} />,
        h3: ({ node, ...props }: any) => <h3 className="text-xl md:text-2xl font-bold text-white mt-10 mb-4 tracking-wide border-l-2 border-pink-500 pl-4" {...props} />,
        h4: ({ node, ...props }: any) => <h4 className="text-lg font-semibold text-purple-200 mt-8 mb-3 uppercase tracking-wider" {...props} />,
        p: ({ node, ...props }: any) => <p className="text-lg text-gray-300 leading-8 mb-6 font-light" {...props} />,
        ul: ({ node, ...props }: any) => <ul className="space-y-3 mb-6 ml-2" {...props} />,
        ol: ({ node, ...props }: any) => <ol className="space-y-3 mb-6 ml-2" {...props} />,
        li: ({ node, ...props }: any) => (
            <li className="flex items-start text-gray-300 leading-7 text-lg">
                <div className="h-7 flex items-center mr-3 shrink-0">
                    <svg className="w-2 h-2 text-pink-500" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                    </svg>
                </div>
                <div className="flex-1 [&>p]:m-0 [&>p]:leading-7">
                    {props.children}
                </div>
            </li>
        ),
        // Table Support
        table: ({ node, ...props }: any) => <div className="overflow-x-auto my-8 border border-white/10 rounded-xl"><table className="w-full text-left border-collapse" {...props} /></div>,
        thead: ({ node, ...props }: any) => <thead className="bg-white/5" {...props} />,
        tbody: ({ node, ...props }: any) => <tbody className="divide-y divide-white/5" {...props} />,
        tr: ({ node, ...props }: any) => <tr className="hover:bg-white/5 transition-colors" {...props} />,
        th: ({ node, ...props }: any) => <th className="p-4 border-b border-white/10 font-bold text-pink-300 whitespace-nowrap" {...props} />,
        td: ({ node, ...props }: any) => <td className="p-4 text-gray-300 text-sm md:text-base leading-relaxed" {...props} />,
        // Wiki Links
        a: ({ node, href, children, ...props }: any) => {
            if (href?.startsWith('wiki:')) {
                return (
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onNavigate(href.replace('wiki:', ''));
                        }}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium inline-block mx-1 group"
                    >
                        <span className="opacity-40 group-hover:opacity-60 transition-opacity">[[</span>
                        <span className="underline underline-offset-4 decoration-cyan-500/30 group-hover:decoration-cyan-500/60">
                            {children}
                        </span>
                        <span className="opacity-40 group-hover:opacity-60 transition-opacity">]]</span>
                    </button>
                );
            }
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 underline underline-offset-4 decoration-pink-500/30" {...props}>
                    {children}
                </a>
            );
        },
        strong: ({ node, ...props }: any) => <strong className="font-semibold text-white bg-white/5 px-1 rounded" {...props} />,
        code: ({ node, ...props }: any) => <code className="font-mono text-sm bg-[#1a1b26] text-blue-300 px-1.5 py-0.5 rounded border border-white/5" {...props} />,
        pre: ({ node, ...props }: any) => <pre className="bg-[#0a0a0c] p-6 rounded-2xl border border-white/10 overflow-x-auto my-8 shadow-inner" {...props} />,
        blockquote: ({ node, ...props }: any) => <blockquote className="border-l-4 border-purple-500 pl-6 py-6 my-10 text-xl text-gray-300 italic bg-white/5 rounded-r-2xl [&>p]:m-0 shadow-lg" {...props} />,
    }), [onNavigate]);

    return (
        <AnimatePresence>
            {topicId && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
                    />
                    <motion.div
                        initial={{ x: '100%', opacity: 0.5 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0.5 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full md:w-1/2 glass-strong border-l border-white/10 shadow-2xl z-50 overflow-y-auto overscroll-contain"
                    >
                        <div className="p-8 md:p-12 relative min-h-full">
                            {/* Nebula Glow in Modal */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />

                            {/* Back Button (Top Left) */}
                            <div className="absolute top-6 left-6 z-20">
                                <button
                                    onClick={() => router.back()}
                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white/70 hover:text-white group"
                                    aria-label="Back"
                                >
                                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {loading ? (
                                <div className="flex h-full items-center justify-center space-x-3">
                                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" />
                                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-100" />
                                    <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce delay-200" />
                                </div>
                            ) : (
                                <article className="mt-8 markdown-content max-w-none">
                                    <div className="mb-6 flex items-center space-x-3">
                                        <span className="text-[10px] font-mono text-pink-400 uppercase tracking-[0.2em] border border-pink-500/30 px-3 py-1 rounded-full bg-pink-500/5">
                                            Phase: {getDisplayPhase()}
                                        </span>
                                    </div>

                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        urlTransform={(url) => url} // Allow all protocols including wiki:
                                        components={markdownComponents}
                                    >
                                        {processedContent}
                                    </ReactMarkdown>
                                </article>
                            )}
                        </div>
                    </motion.div>
                </>
            )
            }
        </AnimatePresence >
    );
}
