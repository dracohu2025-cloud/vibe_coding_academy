'use client';

import { motion } from 'framer-motion';

export default function BMCWidget() {
    return (
        <motion.a
            href="https://www.buymeacoffee.com/dracohu2027"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 z-50 flex items-center justify-center w-[60px] h-[60px] rounded-full shadow-lg hover:shadow-xl transition-all"
            style={{
                right: '100px', // Positioned left of VibeCoach (right-6 + 60px + gap)
                backgroundColor: '#5F7FFF',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-white"
                fill="currentColor"
            >
                <path d="M20.216 6.415l-.132-.666c-.119-.596-.388-1.163-.787-1.652C18.452 2.946 16.96 2 14.908 2H9.231C6.273 2 4.14 4.394 4.14 7.668v2.428c0 3.208 2.062 5.86 5.093 6.037.95 1.77 2.65 3.03 4.646 3.42v.87H9.283c-.352 0-.64.288-.64.64 0 .352.288.64.64.64h9.754c.352 0 .64-.288.64-.64 0-.352-.288-.64-.64-.64h-4.603v-.87c2.256-.44 4.1-1.996 4.966-4.137 1.838-.28 3.253-1.895 3.253-3.864 0-2.316-1.898-4.148-2.437-4.137zM18.89 11.13c0 1.258-.934 2.296-2.14 2.45-1.296.165-2.614.165-3.91 0-1.206-.154-2.14-1.192-2.14-2.45V7.668c0-2.43 1.543-3.89 3.535-3.89h2.956c1.99 0 3.535 1.46 3.535 3.89v3.462h.164c1.714.075 2.505 1.256 2.505 2.193 0 1.054-.836 2.03-2.505 2.204V11.13z" />
            </svg>
        </motion.a>
    );
}
