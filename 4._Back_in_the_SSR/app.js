const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

//Frontpage
app.get("/",(req,res)=>{   
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

//Cheese
app.get("/cheesegallery",(req,res)=>{   
    res.sendFile(__dirname + "/public/cheesegallery/cheesegallery.html");
});


app.listen(process.env.port || port, ()=>{ console.log("Server is running on port:", port);});