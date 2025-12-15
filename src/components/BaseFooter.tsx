import React from 'react';

interface BaseFooterProps {
    className?: string;
}

export default function BaseFooter({ className = '' }: BaseFooterProps) {
    return (
        <footer className={`py-8 text-center text-gray-600 text-sm font-mono flex flex-col items-center gap-4 z-10 ${className}`}>
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
    );
}
