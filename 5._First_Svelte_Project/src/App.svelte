<script>
	export let name;

import Apple from "./pages/Tree/Apple.svelte";
import Profile from "./pages/Profile/Profile.svelte";
import Tree from "./pages/Tree/Tree.svelte";
import Dog from "./pages/Dog/Dog.svelte";

</script>

<main>
	<h1>Hello {name}!</h1>
	
<!--<Dog/>

	<Profile name = {name}/>
	<Profile name = {"name written in App.js"}/>
	
-->	
<Tree/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>