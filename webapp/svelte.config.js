import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	onwarn: (warning, handler) => {
    		// suppress warnings on `vite dev` and `vite build`; but even without this, things still work
    		if (warning.code === "a11y-click-events-have-key-events") return;
    		if (warning.code === "a11y-no-static-element-interactions") return;
    		handler(warning);
  	},
	kit: {adapter: adapter()},
  	preprocess: vitePreprocess()
};

export default config;
