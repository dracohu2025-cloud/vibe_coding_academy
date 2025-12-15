import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Vibe Coding',
    description: 'Code with Soul.',
};

import { LanguageProvider } from '@/contexts/LanguageContext';
import MeshGradientBackground from '@/components/MeshGradientBackground';
import BMCWidget from '@/components/BMCWidget';

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
