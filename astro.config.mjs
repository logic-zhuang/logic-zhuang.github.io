import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://logic-zhuang.github.io',
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
