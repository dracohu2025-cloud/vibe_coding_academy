import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'Vibe Coding Academy',
        template: '%s | Vibe Coding'
    },
    description: 'Master the Art of Coding with Soul. An immersive journey into the modern full-stack ecosystem.',
    keywords: ['Next.js', 'React', 'Coding', 'Full Stack', 'Vibe Coding', 'Software Engineering'],
    authors: [{ name: 'Draco Hu' }],
    creator: 'Draco Hu',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://vibe-coding-academy.vercel.app',
        title: 'Vibe Coding Academy',
        description: 'Master the Art of Coding with Soul.',
        siteName: 'Vibe Coding Academy',
        images: [
            {
                url: '/og-image.jpg', // We should ensure this exists or use a default
                width: 1200,
                height: 630,
                alt: 'Vibe Coding Academy',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vibe Coding Academy',
        description: 'Code with Soul. Explore the modern tech stack.',
        // images: ['/og-image.jpg'], // Same here
        creator: '@dracohu',
    },
    icons: {
        icon: '/favicon.ico',
    },
};

import { LanguageProvider } from '@/contexts/LanguageContext';
import MeshGradientBackground from '@/components/MeshGradientBackground';
import BMCWidget from '@/components/BMCWidget';
import Navbar from '@/components/Navbar';
import { VibeCoach } from '@/components/VibeCoach';
import Script from 'next/script';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'G-KD86VPRLVN');
                    `}
                </Script>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-KD86VPRLVN"
                    strategy="afterInteractive"
                />

                <BMCWidget />

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
