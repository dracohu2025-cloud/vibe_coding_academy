'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import GlassBentoGrid from '@/components/GlassBentoGrid';
import BaseFooter from '@/components/BaseFooter';
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

            <BaseFooter className="absolute bottom-0 w-full pointer-events-none" />
        </div>
    );
}
