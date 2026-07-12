import React, { useEffect, useRef } from 'react';

const CALENDLY_WIDGET_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';

/**
 * Robust Calendly inline widget that handles dynamic mount/unmount correctly.
 * Uses Calendly's official initInlineWidget() API instead of relying on
 * the script's auto-scan of data-url attributes, which fails in modals.
 */
const CalendlyInlineWidget = ({ url, onEventScheduled, prefill = {} }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!url || !containerRef.current) return;

        const container = containerRef.current;

        const initWidget = () => {
            if (window.Calendly && container) {
                // Clear any prior widget instance
                container.innerHTML = '';
                window.Calendly.initInlineWidget({
                    url,
                    parentElement: container,
                    prefill,
                    utm: {},
                });
            }
        };

        // Listen for Calendly's postMessage booking event
        const handleMessage = (e) => {
            if (
                e.origin === 'https://calendly.com' &&
                e.data?.event === 'calendly.event_scheduled'
            ) {
                onEventScheduled?.();
            }
        };
        window.addEventListener('message', handleMessage);

        if (window.Calendly) {
            // Script already loaded from a prior open — init directly
            initWidget();
        } else {
            // Load script once, then init
            const existing = document.querySelector(`script[src="${CALENDLY_WIDGET_SCRIPT}"]`);
            if (existing) {
                // Script tag exists but Calendly not ready yet — poll briefly
                const poll = setInterval(() => {
                    if (window.Calendly) {
                        clearInterval(poll);
                        initWidget();
                    }
                }, 100);
                return () => {
                    clearInterval(poll);
                    window.removeEventListener('message', handleMessage);
                    if (container) container.innerHTML = '';
                };
            } else {
                const script = document.createElement('script');
                script.src = CALENDLY_WIDGET_SCRIPT;
                script.async = true;
                script.onload = initWidget;
                document.head.appendChild(script);
            }
        }

        return () => {
            window.removeEventListener('message', handleMessage);
            if (container) container.innerHTML = '';
        };
    }, [url, onEventScheduled]);

    return (
        <div
            ref={containerRef}
            style={{ minWidth: '320px', height: '680px', width: '100%' }}
        />
    );
};

export default CalendlyInlineWidget;
