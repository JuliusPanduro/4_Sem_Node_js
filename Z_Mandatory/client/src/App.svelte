<script>
	import Tailwindcss from './Tailwindcss.svelte';

	import Login from './routes/Login.svelte';
	import Store from './routes/Store.svelte';

	import Router from "svelte-spa-router";
	import { wrap } from "svelte-spa-router/wrap";


	

  const routes = {
		"/store": wrap({
			component: Store,
			// List of route pre-conditions
			conditions: [
				// First pre-condition function
				async (detail) => {
					const jwtToken = localStorage.getItem('my_token')
					console.log(jwtToken);
					const response = await fetch("http://localhost:3000/store", { 
						method: "GET",
						headers: {
							Authorization: `Bearer ${jwtToken}`,
						},
					});
				},
			],
		}),
		"/": Login,
		"*": Login,
	};
	function conditionsFailed(event) {
		//console.error("conditionsFailed event", event.detail);
		if (event.detail.route === "/#/store") {
			replace("/");
		}
	}
</script>

<Tailwindcss />
<main>
	<Router {routes} on:conditionsFailed={conditionsFailed} />
</main>


