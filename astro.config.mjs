// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://denissebastian.github.io',
  base: 'architect-ai-solutions',
  integrations: [
    react(),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger'],
    },
    ssr: {
      noExternal: ['gsap'],
    },
  },
});
