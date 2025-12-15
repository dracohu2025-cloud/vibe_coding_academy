'use client';

import Link from 'next/link';
import { Orbit } from 'lucide-react';

export default function Logo() {
    return (
        <Link href="/" className="group flex items-center gap-2 px-2 py-1 rounded-xl transition-all hover:bg-white/5">
            <div className="relative">
                <Orbit className="w-6 h-6 text-pink-400 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 bg-pink-500/20 blur-lg rounded-full animate-pulse" />
            </div>

            <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-pink-200 transition-all">
                    VIBE_ROOKIE
                </span>
                <span className="text-[8px] font-mono text-white/40 tracking-[0.3em] uppercase group-hover:tracking-[0.4em] transition-all">
                    Academy
                </span>
            </div>
        </Link>
    );
}
