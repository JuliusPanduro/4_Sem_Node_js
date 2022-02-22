const express = require("express");
const app = express();
const port = 8080;
//With express.static("public") i specify which resources my client has access to.
app.use(express.static("public"));

app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

console.log(__dirname);
app.get("/weather",(req,res) =>{
    res.sendFile(__dirname +"/public/weather.html");
});



app.listen(process.env.PORT || port,()=>{
    console.log("Server is now running on port:",port);
});