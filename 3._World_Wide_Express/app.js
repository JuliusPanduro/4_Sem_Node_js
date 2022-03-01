const express = require("express");
const app = express();
//With express.static("public") i specify which resources my client has access to.
app.use(express.static("public"));


const animalsUtils = require("./animals/animalsUtil.js");
console.log("The number of favorite animals: ",animalsUtils.calculateFavoriteAnimals());

app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

console.log(__dirname);
app.get("/weather",(req,res) =>{
    res.sendFile(__dirname +"/public/weather.html");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server is now running on port:",PORT);
});

console.log(PORT);  