const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();

const frontpageCompleted = nav.replace("%%TITLE_PLACEHOLDER%%","Welcome to the Frontpage")+ frontpage + footer;


app.get("/",(req,res)=>{
res.send(frontpageCompleted);
});








app.listen(process.env.port || port, () =>{
    console.log("Server is running on port:",port);
})