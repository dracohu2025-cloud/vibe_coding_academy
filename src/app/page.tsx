'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import GlassBentoGrid from '@/components/GlassBentoGrid';
import TopicViewer from '@/components/TopicViewer';
import { Topic } from '@/data/knowledge_data';

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar is global now, but we included it here or in layout? 
                Let's put Navbar in Layout to persist, or here if we want specific control.
                The user asked for "Clicking Vibe Rookie returns home", so Navbar should be omnipresent.
                I will add Navbar to Layout next. For now, let's clean this page.
             */}

            <main className="flex-grow flex flex-col justify-center">
                <HeroSection />
            </main>

            <footer className="py-8 text-center text-gray-600 text-sm font-mono absolute bottom-0 w-full pointer-events-none flex flex-col items-center gap-4 z-10">
                <p>BUILT WITH NEXT.JS & VIBE. © 2025</p>
                <div className="pointer-events-auto hover:opacity-90 transition-opacity">
                    <a href="https://www.buymeacoffee.com/dracohu2027" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=dracohu2027&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
                            alt="Buy me a coffee"
                            className="h-10"
                        />
                    </a>
                </div>
            </footer>
        </div>
    );
}
