<script>
import Nametag from "../../components/Nametag/Nametag.svelte";


const sausage = {
    name: "Sausage",
    age: 4,
    adress: "Puppet Street"
}

export let dog;

</script>

<h1 id="dog" on:focus on:mouseover="{() => console.log("Vuf")}">🐕</h1>


<Nametag nametagInfo={sausage}></Nametag>


<style>
    #dog{
        align-content: center;
        font-size: 150px;
    }
    #dog:hover{
        font-size: 250px;
  transition: ease-in;
    }
</style>