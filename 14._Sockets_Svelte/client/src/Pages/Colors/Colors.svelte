<script>
import io from "socket.io.client"

let lastPersonToChangeColor;

const socket = io();

socket.on("changeColor", ({ data, username })=>{
    document.body.style.backgroundColor = data;

    lastPersonToChangeColor = username;
});

function changeColor(){
socket.emit("colorChanged" , {data: event.target.value});
}

</script>
<div>Last person to change the color: {lastPersonToChangeColor || "Unknown"} </div>

<input type="color" on:change={changeColor}>