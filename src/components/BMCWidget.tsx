'use client';

import { motion } from 'framer-motion';

export default function BMCWidget() {
    return (
        <motion.div
            className="fixed bottom-6 z-50 pointer-events-auto"
            style={{
                right: '100px', // Positioned left of VibeCoach
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <a
                href="https://www.buymeacoffee.com/dracohu2027"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <img
                    src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=dracohu2027&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
                    alt="Buy me a coffee"
                    className="h-[60px] w-auto shadow-lg hover:shadow-xl transition-shadow rounded-lg"
                />
            </a>
        </motion.div>
    );
}
