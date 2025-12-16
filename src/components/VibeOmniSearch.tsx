'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, ArrowRight, Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

export default function VibeOmniSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [isGenerating, setIsGenerating] = useState(false);

    // ... existing useEffects

    const handleAskVibe = async () => {
        setIsGenerating(true);
        try {
            const res = await fetch('/api/agent/create-wiki', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topic: query, lang: language })
            });

            if (!res.ok) throw new Error('Generation failed');

            const data = await res.json();

            // Notify user
            alert(language === 'en'
                ? "Vibe has written the guide! It will appear after the next deployment (avail in ~2 mins)."
                : "Vibe 已为您写好教程！部署完成后（约2分钟）即可访问。"
            );

            // Optionally redirect immediately to let them see the 404 -> content eventually
            // router.push(`/journey?topic=${data.slug}`);

        } catch (error) {
            console.error(error);
            alert("Vibe is having trouble writing right now. Check console.");
        } finally {
            setIsGenerating(false);
            setIsOpen(false);
        }
    };

    return (
        <div ref={containerRef} className="relative w-full max-w-2xl mx-auto mb-12 z-50">
            {/* ... input ... */}
            {isSearching && <Loader className="w-5 h-5 text-purple-400 animate-spin" />}
            {isGenerating && <Sparkles className="w-5 h-5 text-pink-500 animate-pulse ml-2" />}
        </div>
            </div >

        {/* ... dropdown ... */ }
        < div className = "border-t border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-500/10" >
            <button
                onClick={handleAskVibe}
                disabled={isGenerating}
                className="w-full text-left px-4 py-4 flex items-center space-x-4 hover:bg-white/5 transition-colors group disabled:opacity-50"
            >
                <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/20">
                    {isGenerating ? <Loader className="w-5 h-5 text-white animate-spin" /> : <Sparkles className="w-5 h-5 text-white" />}
                </div>
                <div>
                    <p className="text-white font-medium group-hover:text-purple-300 transition-colors">
                        {isGenerating
                            ? (language === 'en' ? 'Vibe is writing...' : 'Vibe 正在撰写...')
                            : (language === 'en' ? 'Ask Vibe to create this guide' : '让 Vibe 为你创建这篇教程')}
                    </p>
                    <p className="text-sm text-white/40">
                        {language === 'en' ? 'AI Mentor will generate a new wiki page' : 'AI 导师将即时生成新的 Wiki 页面'}
                    </p>
                </div>
            </button>
                        </div >
                    </motion.div >
                )
}
            </AnimatePresence >
        </div >
    );
}
