'use client';

import Logo from './Logo';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
    const { language, setLanguage } = useLanguage();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 flex justify-between items-center pointer-events-none">
            <div className="pointer-events-auto">
                <Logo />
            </div>

            <div className="pointer-events-auto glass rounded-full p-1 flex items-center gap-1 border border-white/10 bg-black/20 backdrop-blur-md">
                <button
                    onClick={() => setLanguage('en')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold font-mono transition-all duration-300 ${language === 'en'
                            ? 'bg-white/20 text-white shadow-[0_0_10px_rgba(255,255,255,0.2)]'
                            : 'text-white/40 hover:text-white hover:bg-white/5'
                        }`}
                >
                    EN
                </button>
                <button
                    onClick={() => setLanguage('cn')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold font-mono transition-all duration-300 ${language === 'cn'
                            ? 'bg-pink-500/20 text-pink-200 border border-pink-500/30 shadow-[0_0_10px_rgba(236,72,153,0.3)]'
                            : 'text-white/40 hover:text-white hover:bg-white/5'
                        }`}
                >
                    CN
                </button>
            </div>
        </nav>
    );
}
