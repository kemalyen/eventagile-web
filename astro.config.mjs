import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],


    markdown: {

        rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
    },

});
