<script>
    import Button from "../components/Button.svelte";
    function logout(){
        window.localStorage.clear();
        window.location.replace("/");
    }
</script>
<div class="container flex justify-center items-center w-screen h-screen mx-auto">
    <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-10 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
    <Button on:click="{logout}">Login</Button>
</div>
</div> 
