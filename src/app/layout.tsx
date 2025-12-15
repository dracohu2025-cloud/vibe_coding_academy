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

import Script from 'next/script';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-KD86VPRLVN"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'G-KD86VPRLVN');
                    `}
                </Script>
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
