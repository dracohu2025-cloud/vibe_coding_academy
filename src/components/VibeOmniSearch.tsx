'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, ArrowRight, Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function VibeOmniSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { language, t } = useLanguage();
    const router = useRouter();

    // Debounce Search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (query.length >= 2) {
                performSearch(query);
                setIsOpen(true);
            } else {
                setResults([]);
                setIsOpen(false);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [query, language]);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const performSearch = async (q: string) => {
        setIsSearching(true);
        try {
            const res = await fetch(`/api/search?q=${encodeURIComponent(q)}&lang=${language}`);
            const data = await res.json();
            setResults(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsSearching(false);
        }
    };

    const handleSelect = (slug: string) => {
        router.push(`/journey?topic=${slug}`);
        setIsOpen(false);
        setQuery('');
    };

    const handleAskVibe = () => {
        // Mocking the Vibe Agent creation flow
        // In Phase 2, this will trigger the generation process
        alert(language === 'en'
            ? `Vibe Agent received your request: "${query}". \n(This feature is coming in Phase 2!)`
            : `Vibe Agent 已收到您的请求: "${query}". \n(此功能将在第二阶段上线!)`
        );
        setIsOpen(false);
    };

    return (
        <div ref={containerRef} className="relative w-full max-w-2xl mx-auto mb-12 z-50">
            {/* Search Input */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                <div className="relative flex items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                    <Search className="w-6 h-6 text-white/50 mr-4" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={language === 'en' ? "Ask Vibe or search wiki..." : "向 Vibe 提问或搜索词条..."}
                        className="w-full bg-transparent text-white text-lg placeholder-white/30 focus:outline-none"
                    />
                    {isSearching && <Loader className="w-5 h-5 text-purple-400 animate-spin" />}
                </div>
            </div>

            {/* Creating the Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-4 bg-[#1a1b26]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
                    >
                        {results.length > 0 ? (
                            <ul className="py-2">
                                <div className="px-4 py-2 text-xs font-mono text-white/30 uppercase tracking-widest border-b border-white/5">
                                    {language === 'en' ? 'Knowledge Base' : '知识库匹配'}
                                </div>
                                {results.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => handleSelect(item.id)}
                                            className="w-full text-left px-4 py-3 hover:bg-white/5 flex items-center justify-between group transition-colors"
                                        >
                                            <span className="text-white group-hover:text-pink-200 transition-colors">
                                                {item.title}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-pink-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : null}

                        {/* Always show "Ask Vibe" when there are no exact matches or as an alternative */}
                        <div className="border-t border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                            <button
                                onClick={handleAskVibe}
                                className="w-full text-left px-4 py-4 flex items-center space-x-4 hover:bg-white/5 transition-colors group"
                            >
                                <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-medium group-hover:text-purple-300 transition-colors">
                                        {language === 'en' ? 'Ask Vibe to create this guide' : '让 Vibe 为你创建这篇教程'}
                                    </p>
                                    <p className="text-sm text-white/40">
                                        {language === 'en' ? 'AI Mentor will generate a new wiki page' : 'AI 导师将即时生成新的 Wiki 页面'}
                                    </p>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
