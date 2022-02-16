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


app.get("/aboutclient/:clientName",(req,res)=>{
    console.log(req.params.clientName);
res.send({greeting: `Hello there ${req.params.clientName}`});
});


// write a get route that handles /libaries ... //("/libaries",(req,res) call back function
//http://localhost:8080/libaries?book1=the_bible&book2=the_koran
app.get("/libaries",(req,res)=>{
res.send(req.query);
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


app.listen(8080, (error)=>{
    console.log("Server is running on port", 8080);
});

// how do you send data in a GET request
// The two ways to send data in a rest api
// path variables    url: /thisisdynaic
// query string      url: ?key=value

