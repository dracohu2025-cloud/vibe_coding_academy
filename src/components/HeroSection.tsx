'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function HeroSection() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 relative">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <span className="inline-block py-1 px-4 rounded-full glass-strong text-xs font-medium text-pink-300 mb-6 border border-pink-500/30 uppercase tracking-widest shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                    {t('hero.desc')}
                </span>

                <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter mix-blend-overlay opacity-90">
                    {t('hero.title')} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200" style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' }}>
                        {t('hero.subtitle')}
                    </span>
                </h1>

                <Link href="/journey">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl text-lg border border-white/20 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 flex items-center gap-2">
                            {t('hero.action')}
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
}
