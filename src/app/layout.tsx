import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Vibe Coding',
    description: 'Code with Soul.',
};

import { LanguageProvider } from '@/contexts/LanguageContext';
import MeshGradientBackground from '@/components/MeshGradientBackground';
import Navbar from '@/components/Navbar';
import { VibeCoach } from '@/components/VibeCoach';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <LanguageProvider>
                    <MeshGradientBackground />
                    <Navbar />
                    <main className="min-h-screen relative z-10 font-sans text-white/90 selection:bg-pink-500/30">
                        {children}
                    </main>
                    <VibeCoach />
                </LanguageProvider>
            </body>
        </html>
    );
}
