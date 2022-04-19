<script>
    import Button from '../components/Button.svelte'
    import Input from '../components/Input.svelte'

    import { useNavigate, useLocation } from "svelte-navigator";
    import { user } from "../stores.js";

    const navigate = useNavigate();
    const location = useLocation();

    import { notifications } from '../components/notification.js';
    import Toast from '../components/Toast.svelte';


    let email,password;
   
    function handleSubmit() {
    $user = { email, password };
    const from = ($location.state && $location.state.from) || "/store";
    navigate(from, { replace: true });
  }
	/*async function login () {
        window.localStorage.clear();
		const res = await fetch('http://localhost:3000/login', {
			method: 'POST',
			body: JSON.stringify({email,password}),
            headers:{
                'Content-Type': 'application/json'
            },
		});
		
	
        if(res.status === 200){
            const content = await res.json();
            notifications.success('You are now logged in!',5000)
            window.localStorage.setItem('my_token',content.my_token);
            console.log(content.my_token);
            $user = { email, password };
            const from = ($location.state && $location.state.from) || "/store";
            navigate(from, { replace: true });
           // console.log(get(user));
        }else{
            notifications.danger('Wrong E-mail or Password',5000);
        }
        console.log(content); 
	}*/
 
</script>
<form on:submit|preventDefault={handleSubmit}>
    <div class="container flex justify-center items-center w-screen h-screen mx-auto">
        <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-10 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
        <h2 class="text-black text-lg font-medium title-font mb-5">Login</h2>
        <Input label="E-Mail" bind:value={email} type="text" required/>
        <Input label="Password" bind:value={password} type="password" required/>
        <Button type="submit">Login</Button>
    <Toast/>
        <p class="text-xs text-black mt-3">Any Text here ?</p>
    </div>
    </div> 
</form>


<!--
   <div class="container flex justify-center items-center w-screen h-screen mx-auto">
    <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-10 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
    <h2 class="text-black text-lg font-medium title-font mb-5">Login</h2>
    <Input label="E-Mail" bind:value={email} type="text" required/>
    <Input label="Password" bind:value={password} type="password" required/>
    <Button on:click="{login}">Login</Button>
<Toast/>
    <p class="text-xs text-black mt-3">Any Text here ?</p>
</div>
</div> 
-->
