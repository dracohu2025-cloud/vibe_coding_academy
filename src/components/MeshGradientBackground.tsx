'use client';

import { motion } from 'framer-motion';

export default function MeshGradientBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0c]">
            {/* Primary Nebula Orb - Stronger Purple */}
            <motion.div
                animate={{
                    scale: [1, 1.4, 1],
                    x: [0, 100, -100, 0],
                    y: [0, -50, 50, 0],
                    opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-20%] left-[-10%] w-[90vw] h-[90vw] pointer-events-none will-change-transform"
                style={{
                    background: 'radial-gradient(circle, rgba(88, 28, 135, 0.6) 0%, rgba(0,0,0,0) 70%)', // Deep Purple
                    filter: 'blur(100px)',
                    mixBlendMode: 'screen'
                }}
            />

            {/* Secondary Nebula Orb (Warmth) - Hot Pink */}
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -50, 50, 0],
                    y: [0, 80, -80, 0],
                    opacity: [0.5, 0.7, 0.5]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[90vw] h-[90vw] pointer-events-none will-change-transform"
                style={{
                    background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(0,0,0,0) 70%)', // Pink
                    filter: 'blur(100px)',
                    mixBlendMode: 'screen'
                }}
            />

            {/* Accent Orb - Cyan/Blue */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    x: [0, 80, -80, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[20%] right-[20%] w-[60vw] h-[60vw] pointer-events-none will-change-transform"
                style={{
                    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(0,0,0,0) 70%)', // Cyan
                    filter: 'blur(80px)',
                    mixBlendMode: 'screen'
                }}
            />
            {/* Floating Particles (Stars) */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        </div>
    );
}
