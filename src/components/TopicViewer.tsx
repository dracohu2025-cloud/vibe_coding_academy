'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft } from 'lucide-react';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Topic } from '@/data/knowledge_data';
import { useLanguage } from '@/contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

interface TopicViewerProps {
    topic: Topic | null;
    onClose: () => void;
}

export default function TopicViewer({ topic, onClose }: TopicViewerProps) {
    const { language, t } = useLanguage();
    const [history, setHistory] = useState<string[]>([]);
    const [currentId, setCurrentId] = useState<string | null>(null);
    const [metadata, setMetadata] = useState<any>(null);
    // Restoration of missing states
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(false);

    // Initialize when topic prop changes
    useEffect(() => {
        if (topic) {
            setHistory([topic.id]);
            setCurrentId(topic.id);
            setMetadata(null); // Reset metadata until fetch
            document.body.style.overflow = 'hidden';
        } else {
            setHistory([]);
            setCurrentId(null);
            document.body.style.overflow = 'unset';
            setLoading(false); // Ensure loading is reset
        }
    }, [topic]);

    // Fetch content when currentId changes
    useEffect(() => {
        if (!currentId) return;

        setLoading(true);
        // If it's a wiki topic (starts with wiki_), we might not have a translation key, so we rely on frontmatter
        const isWiki = currentId.startsWith('wiki_');

        // If it's a regular topic, we can try to use the topic prop data initially for smoothness,
        // but for Wiki traversal we rely on the API returning metadata.

        fetch(`/api/content/${language}/${currentId}`)
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
    }, [currentId, language]);

    const handleWikiClick = (id: string) => {
        setHistory(prev => [...prev, id]);
        setCurrentId(id);
    };

    const handleBack = () => {
        if (history.length > 1) {
            const newHistory = [...history];
            newHistory.pop(); // Remove current
            setHistory(newHistory);
            setCurrentId(newHistory[newHistory.length - 1]);
        }
    };

    // Helper to get display title
    const getDisplayTitle = () => {
        if (metadata?.title) return metadata.title;
        // Fallback for initial topic
        if (topic && topic.id === currentId) return t(topic.translationKey + '.title');
        return 'Loading...';
    };

    const getDisplayPhase = () => {
        if (metadata?.phase) return metadata.phase;
        if (topic && topic.id === currentId) return topic.phase;
        return 'WIKI';
    };

    // Process [[Wiki]] syntax
    const processedContent = useMemo(() => {
        if (!content) return '';
        // Replace [[Term]] with [Term](wiki:wiki_term_normalized)
        return content.replace(/\[\[(.*?)\]\]/g, (match, term) => {
            const normalized = 'wiki_' + term.trim().toLowerCase().replace(/[^a-z0-9]/g, '_');
            return `[${term}](wiki:${normalized})`;
        });
    }, [content]);

    return (
        <AnimatePresence>
            {topic && (
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
                        className="fixed inset-y-0 right-0 w-full md:w-[600px] lg:w-[800px] glass-strong border-l border-white/10 shadow-2xl z-50 overflow-y-auto overscroll-contain"
                    >
                        <div className="p-8 md:p-12 relative min-h-full">
                            {/* Nebula Glow in Modal */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />

                            {/* Back Button (Top Left) */}
                            {history.length > 1 && (
                                <div className="absolute top-6 left-6 z-20">
                                    <button
                                        onClick={handleBack}
                                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white/70 hover:text-white group"
                                        aria-label="Back"
                                    >
                                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            )}

                            {/* Close Button (Top Right) */}
                            <div className="absolute top-6 right-6 z-20">
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                                    aria-label="Close"
                                >
                                    <X className="w-6 h-6 text-white" />
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
                                        components={{
                                            h1: ({ node, ...props }) => <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-8 tracking-tighter" {...props} />,
                                            h2: ({ node, ...props }) => <h2 className="text-2xl md:text-3xl font-bold text-pink-200 mt-12 mb-6 flex items-center" {...props} />,
                                            h3: ({ node, ...props }) => <h3 className="text-xl md:text-2xl font-bold text-white mt-10 mb-4 tracking-wide border-l-2 border-pink-500 pl-4" {...props} />,
                                            h4: ({ node, ...props }) => <h4 className="text-lg font-semibold text-purple-200 mt-8 mb-3 uppercase tracking-wider" {...props} />,
                                            p: ({ node, ...props }) => <p className="text-lg text-gray-300 leading-8 mb-6 font-light" {...props} />,
                                            ul: ({ node, ...props }) => <ul className="space-y-3 mb-6 ml-2" {...props} />,
                                            ol: ({ node, ...props }) => <ol className="space-y-3 mb-6 ml-2" {...props} />,
                                            li: ({ node, ...props }) => (
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
                                            table: ({ node, ...props }) => <div className="overflow-x-auto my-8 border border-white/10 rounded-xl"><table className="w-full text-left border-collapse" {...props} /></div>,
                                            thead: ({ node, ...props }) => <thead className="bg-white/5" {...props} />,
                                            tbody: ({ node, ...props }) => <tbody className="divide-y divide-white/5" {...props} />,
                                            tr: ({ node, ...props }) => <tr className="hover:bg-white/5 transition-colors" {...props} />,
                                            th: ({ node, ...props }) => <th className="p-4 border-b border-white/10 font-bold text-pink-300 whitespace-nowrap" {...props} />,
                                            td: ({ node, ...props }) => <td className="p-4 text-gray-300 text-sm md:text-base leading-relaxed" {...props} />,
                                            // Wiki Links
                                            a: ({ node, href, children, ...props }) => {
                                                if (href?.startsWith('wiki:')) {
                                                    return (
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                handleWikiClick(href.replace('wiki:', ''));
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
                                            strong: ({ node, ...props }) => <strong className="font-semibold text-white bg-white/5 px-1 rounded" {...props} />,
                                            code: ({ node, ...props }) => <code className="font-mono text-sm bg-[#1a1b26] text-blue-300 px-1.5 py-0.5 rounded border border-white/5" {...props} />,
                                            pre: ({ node, ...props }) => <pre className="bg-[#0a0a0c] p-6 rounded-2xl border border-white/10 overflow-x-auto my-8 shadow-inner" {...props} />,
                                            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-purple-500 pl-6 py-6 my-10 text-xl text-gray-300 italic bg-white/5 rounded-r-2xl [&>p]:m-0 shadow-lg" {...props} />,
                                        }}
                                    >
                                        {processedContent}
                                    </ReactMarkdown>
                                </article>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
