import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import { responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react()],
    adapter: netlify(),

    markdown: {

        rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
    },

});
