//import in node.js is called require("") in the traditional way, but import can also be used.
//Using const to work with it.

//import express
const express = require("express");

//instanciate express
const app =  express();

//body parser for make the app parse json.
app.use(express.json());

//import and instanciate in a oneliner
// const app = require("express")();

//the endpoint and the callback function (request,response)
app.get("/",(req,res) =>{
    res.send({ message: "Welcome to my server." });
});

app.get("/about",(req,res) =>{
res.send({ 
            version: "1.0.0",
            type: "Simple Server for an api"
})
});


app.post("/",(req,res) =>{
    console.log(req.body)
    res.send(req.body);
});


app.post("/opinion",(req,res)=>{
    if (req.body.message === "Hello world"){
         res.send({ message: "Great Opinion"});
    }else{
        res.send({ message: "You have a bad opinion"});
       
    }
});



