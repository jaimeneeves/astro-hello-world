import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://unique-florentine-1b2c44.netlify.app/",
  integrations: [preact()]
});