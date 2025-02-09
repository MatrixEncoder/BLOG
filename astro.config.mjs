import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://matrixencoder.github.io',
  base: '/BLOG',
  integrations: [tailwind()]
});