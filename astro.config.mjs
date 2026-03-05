// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dancing-dragons.github.io',
  output: 'static',
  server: {
    port: 4321,
  },
});
