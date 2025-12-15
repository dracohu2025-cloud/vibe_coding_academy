import React from 'react';

interface BaseFooterProps {
    className?: string;
}

export default function BaseFooter({ className = '' }: BaseFooterProps) {
    return (
        <footer className={`py-8 text-center text-gray-600 text-sm font-mono flex flex-col items-center gap-4 z-10 ${className}`}>
            <p>BUILT WITH NEXT.JS & VIBE. © 2025</p>
        </footer>
    );
}
