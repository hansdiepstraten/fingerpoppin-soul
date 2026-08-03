import { defineConfig } from 'astro/config';

// Pure static build. Output goes to dist/ and deploys as-is to Cloudflare Pages.
// If you later add a Pages Function (e.g. a server-side form handler), install
// @astrojs/cloudflare and add it as `adapter` here.
export default defineConfig({
  site: 'https://www.fingerpoppinsoul.amsterdam',
  trailingSlash: 'ignore',
});
