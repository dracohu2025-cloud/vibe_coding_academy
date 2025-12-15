'use client';

import { useEffect } from 'react';

export default function BMCWidget() {
    useEffect(() => {
        // Prevent duplicate injection
        if (document.getElementById('bmc-widget-script')) return;

        const script = document.createElement('script');
        script.id = 'bmc-widget-script';
        script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
        script.dataset.name = 'BMC-Widget';
        script.dataset.cfasync = 'false';
        script.dataset.id = 'dracohu2027';
        script.dataset.description = 'Support me on Buy me a coffee!';
        script.dataset.message = '';
        script.dataset.color = '#5F7FFF';
        script.dataset.position = 'Right';
        script.dataset.x_margin = '100';
        script.dataset.y_margin = '24'; // Align with VibeCoach (bottom-6 = 24px)
        script.async = true;

        // Ensure it runs after hydration
        requestAnimationFrame(() => {
            document.body.appendChild(script);
        });

        return () => {
            // Optional: try to cleanup if unmounted, but widgets are messy.
            // keeping it simple.
        };
    }, []);

    return null;
}
