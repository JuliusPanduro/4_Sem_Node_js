import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'name written in main.js'
	}
});

export default app;