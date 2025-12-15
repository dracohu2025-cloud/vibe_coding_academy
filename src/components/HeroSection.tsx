'use client';

import { motion } from 'framer-motion';

export default function HeroSection({ onStart }: { onStart: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[rgba(120,119,198,0.15)] blur-[100px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="inline-block py-1 px-3 rounded-full glass text-sm font-medium text-[rgb(var(--accent))] mb-4 border border-[rgb(var(--accent))]/20">
                    Be the flow, not the code.
                </span>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Vibe Coding <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))]">
                        Rookie Guide
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8">
                    从零开始搭建你的全栈开发宇宙。<br />
                    不讲枯燥的语法，只讲如何帅气地构建世界。
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onStart}
                    className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow"
                >
                    Start Journey (开始旅程)
                </motion.button>
            </motion.div>
        </div>
    );
}
