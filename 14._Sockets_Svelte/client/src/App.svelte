<script>
import UserRegistration from "./Pages/UserRegistration/UserRegistration.svelte";
import Colors from "./Pages/Colors/Colors.svelte";

import { onMount } from "svelte"

import { Wave } from "svelte-loading-spinners";

let username = false;

onMount( async () => {
	const response = await fetch("/api/fetchuser");
	const { data } = await response.json();
	username = data;

})

/*fetch("/api/fetchuser")
.then(response => response.json())
.then(data => {
	console.log(data);
});*/

</script>

<main>

	{#if username === false}
	<div id="loading"><Wave/></div>
	{:else if username}
	<Colors/>
	<div>You are now registered {username}</div>
	{:else}
	<UserRegistration />
	{/if}
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;

	}

	#loading{
		min-width: 100vw;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>