import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Vibe Coding Rookie',
    description: 'A visual guide for the modern vibe coder.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh-CN">
            <body>
                <div className="bg-stars" />
                <main className="min-h-screen relative z-10">
                    {children}
                </main>
            </body>
        </html>
    );
}
