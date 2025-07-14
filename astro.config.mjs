// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
//import tailwind from '@astrojs/tailwind'

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://ricardomolinacoronel.tech', // tu dominio personalizado
  base: '/',
  outDir: 'dist',
});