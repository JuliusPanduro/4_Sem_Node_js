<script>
import Apple from "../Tree/Apple.svelte";


    let apples = ['🍏','🍎', '🍏','🍎']


    function pickAnApple(){
        console.log("Picked an Apple");
        apples.pop();
        apples = apples;
    }
</script>

<div id="tree" >
    <h1>This Is A Tree</h1> 
    {#each apples as apple}
    <Apple apple={apple} />
    {/each}
  
</div>
<div  id="trunk">
    <button on:click="{pickAnApple}">Pick an apple </button>
</div>




<style>
    #tree{
        background-color: lightgreen;
        border-radius: 50%;
        width: 350px;
        height: 350px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    #trunk button{
        margin-top: -1px;
        color: white;
        background-color: saddlebrown;
        height: 120px;
        width: 50px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
    }
</style>