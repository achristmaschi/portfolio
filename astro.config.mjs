// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update these to match your GitHub username and repository name
  site: 'https://achristmaschi.github.io',
  base: 'chi-portfolio',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});