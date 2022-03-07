const express = require("express");
const app = express();

app.use(express.static("public"));

/*const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();

const frontpageCompleted = nav.replace("%%TITLE_PLACEHOLDER%%","Welcome to the Frontpage")+ frontpage + footer;
*/

const pagesRouter = (require("./public/routers/pagesrouter.js"));

app.use(pagesRouter);









const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log("Server is running on port:",PORT);
});