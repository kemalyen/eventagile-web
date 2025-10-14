import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import { responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react(), partytown()],
    adapter: netlify(),

    markdown: {

        rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
    },

});