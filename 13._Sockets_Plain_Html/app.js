import express from "express";
const app = express();

app.use(express.static("./public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection",(socket)=>{

    socket.on("a client changed the color",({data})=>{

        //Broadcast to all the sockets BUT ITSELF.
        // socket.broadcast.emit("change the color" , {data});

        //only emits to the socket ITSELF
        // socket.emit("change the color" , {data});
        
       //emits to ALL the socket is the namespace
       io.emit("change the color" , {data});
    });

});

import path from "path";

app.get("/",(req,res)=>{
    res.sendFile(path.resolve("./public/colors.html"));
});

server.listen(3000);