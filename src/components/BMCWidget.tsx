'use client';

import Script from 'next/script';

export default function BMCWidget() {
    return (
        <Script
            id="bmc-widget"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            strategy="lazyOnload"
            data-name="BMC-Widget"
            data-cfasync="false"
            data-id="dracohu2027"
            data-description="Support me on Buy me a coffee!"
            data-message=""
            data-color="#5F7FFF"
            data-position="Right"
            data-x_margin="100"
            data-y_margin="24"
        />
    );
}
