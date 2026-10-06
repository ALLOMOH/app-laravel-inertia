import '../css/app.css';
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

createInertiaApp({
    title: (title) => title ? `${title} - ${import.meta.env.VITE_APP_NAME ?? 'Laravel'}` : (import.meta.env.VITE_APP_NAME ?? 'Laravel'),
    progress: { color: '#4B5563' },
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        const page = pages[`./Pages/${name}.jsx`];
        if (!page) {
            throw new Error(`Page not found: ./Pages/${name}.jsx`);
        }
        return page.default ?? page;
    },
    setup({el, App, props}) {
        createRoot(el).render(<App {...props} />)
    }
})
