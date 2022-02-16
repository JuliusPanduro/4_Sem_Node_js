const express = require("express");
const app = express();
app.use(express.static("public"));



app.get("/clock",(req,res)=>{
    res.sendFile(__dirname + "/public/clock.html");

});

app.listen(8080,()=>{
    console.log("Server is now running on port:",8080);
});