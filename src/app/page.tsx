'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import GlassBentoGrid from '@/components/GlassBentoGrid';
import TopicViewer from '@/components/TopicViewer';
import Script from 'next/script';
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

            <Script
                id="bmc-widget"
                src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
                data-name="BMC-Widget"
                data-cfasync="false"
                data-id="dracohu2027"
                data-description="Support me on Buy me a coffee!"
                data-message=""
                data-color="#5F7FFF"
                data-position="Right"
                data-x_margin="100"
                data-y_margin="18"
            />

            <footer className="py-8 text-center text-gray-600 text-sm font-mono absolute bottom-0 w-full pointer-events-none z-10">
                <p>BUILT WITH NEXT.JS & VIBE. © 2025</p>
            </footer>
        </div>
    );
}
