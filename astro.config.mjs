import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  site: 'https://lockedinlocksmith.com',
  integrations: [partytown(), sitemap()],
	vite: {
		// The `ssr.external` option is not needed to solve the Netlify build error.
		// build: {
		// 	rollupOptions: {
		// 		// ...
		// 	},
		// },
	},
});