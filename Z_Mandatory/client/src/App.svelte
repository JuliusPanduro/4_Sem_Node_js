<script>
	import Tailwindcss from './Tailwindcss.svelte';
	import { Router, Route, Link } from "svelte-navigator";
	import Login from './routes/Login.svelte';
	import Store from './routes/Store.svelte';
	import Logout from './routes/Logout.svelte';
	import { get } from 'svelte/store';
	import { user } from "./stores";
	import PrivateRoute from "./routes/PrivateRoute.svelte";


	function handleLogout() {
    $user = null;
  }
</script>

<Tailwindcss />
<Router>
<!--
	<header>
  
	  <nav>
		<Link to="profile">Profile</Link>
	  </nav>
	</header>
-->	
  
	<main>
	  <Route path="/">
		<Login />
	  </Route>
  
	  <Route path="store">
		<h3>About</h3>
		<p>That's what it's all about!</p>
	  </Route>
  
	 
		 <PrivateRoute path="store" let:location>
		<h3>Welcome {$user.email}</h3>
		<button on:click={handleLogout}>Logout</button>
	  </PrivateRoute>
	 
	</main>
  </Router>










<!--
<Login />
{#if loggedIn}
<Login />
{:else}
<Store />
{/if}

	<Router routes={{
	'/':Login,
	'/store':Store,
	'/logout':Logout
}}
 />
	

	
	{#if (user.my_token) == window.localStorage.my_token}

Hello, {(user.name)}
	
{/if}>

-->

	<!--
		<Router>
	<div>
		<Route path="/">
			<Login />
		</Route>
	</div>

{#if window.localStorage.getItem('my_token') === $user.my_token}
<Route path="/store">
	<Store />
</Route>
{/if}
</Router>	

			<Route path="logout" component={Logout}
		 />

		<Route path="/store" component={Store} />
			<Store />
		</Route>
			<nav>
			<Link to="logout">Logout</Link>
			<Link to="store">Store</Link>
		</nav>
		
		<Route path="blog/*">
			<Route path="/">
				<Blog />
			</Route>
			<Route path=":id" component={BlogPost} />
		</Route>
	</div>
	-->
	



 <!--
<header class="text-gray-400 bg-gray-900 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
	  <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
		<a class="hover:text-white">Fourth Link</a>
	  </nav>
	  <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
	  </div>
	</div>
  </header>

<div class="container flex justify-center items-center w-screen h-screen mx-auto">

	<Router>
		<div>
			<Route path="/login">
				<Login />
			</Route>
		</div>
	</Router>
</div>
-->

