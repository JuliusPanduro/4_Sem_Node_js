const router = require("express").Router();
const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();




router.get("/",(req,res)=>{
    const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
    const frontpageCompleted = nav.replace("%%TITLE_PLACEHOLDER%%","Welcome to the Frontpage")+ frontpage + footer;
    res.send(frontpageCompleted);
});

router.get("/terminal",(req,res)=>{
    const terminalpage = fs.readFileSync("./public/pages/terminal/terminal.html").toString();
    const terminalpageCompleted = nav.replace("%%TITLE_PLACEHOLDER%%","Terminal Commands")+ terminalpage + footer;
res.send(terminalpageCompleted);
});

router.get("/literature",(req,res)=>{
    const literaturepage = fs.readFileSync("./public/pages/literature/literature.html").toString();
    const literaturepageCompleted = nav.replace("%%TITLE_PLACEHOLDER%%","Literature List")+ literaturepage + footer;
    res.send(literaturepageCompleted);
});

router.get("/api-conventions",(req,res)=>{
    const apipage = fs.readFileSync("./public/pages/api_conventions/api.html").toString();
    const apipageCompleted = nav.replace("%%TITLE_PLACEHOLDER%%","Api Conventions")+ apipage + footer;
    res.send(apipageCompleted);
});

router.get("/callback-functions",(req,res)=>{
    const callbackpage = fs.readFileSync("./public/pages/callback_functions/callback.html").toString();
    const callbackpageCompleted = nav.replace("%%TITLE_PLACEHOLDER%%","Callback Functions")+ callbackpage + footer;
    res.send(callbackpageCompleted);
});

router.get("/body-parsing",(req,res)=>{
    const bodyparserpage = fs.readFileSync("./public/pages/body_parsing/bodyparsing.html").toString();
    const bodyparserpageCompleted = nav.replace("%%TITLE_PLACEHOLDER%%","Body Parsing")+ bodyparserpage + footer;
res.send(bodyparserpageCompleted);
});

router.get("/fetch",(req,res)=>{
    const fetchpage = fs.readFileSync("./public/pages/fetch/fetch.html").toString();
    const fetchpageCompleted = nav.replace("%%TITLE_PLACEHOLDER%%","Fetch")+ fetchpage + footer;
res.send(fetchpageCompleted);
});




router.get("/nodemon",(req,res)=>{
    const nodemonpage = fs.readFileSync("./public/pages/nodemon/nodemon.html").toString();
    const nodemonpageCompleted = nav.replace("%%TITLE_PLACEHOLDER%%","Nodemon")+ nodemonpage + footer;
res.send(nodemonpageCompleted);
});

router.get("/npm",(req,res)=>{
    const npmpage = fs.readFileSync("./public/pages/npm/npm.html").toString();
    const npmpageCompleted = nav.replace("%%TITLE_PLACEHOLDER%%","Npm")+ npmpage + footer;
res.send(npmpageCompleted);
});



module.exports = router;
