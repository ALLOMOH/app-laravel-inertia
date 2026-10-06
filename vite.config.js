import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import inertia from '@inertiajs/vite';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            ssr:'/resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        inertia(),
    ],
    resolve: {
        alias: {
            '@': resolve(import.meta.dirname,'resources/js'),
            '@lang':'/lang',
        }
    },
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**','**/.gitignore'],
        },
    },
});
