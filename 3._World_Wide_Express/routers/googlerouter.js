const router = require("express").Router();
import { response } from 'express';
import fetch from 'node-fetch';

fetch("https://google.com")
.then(response => response.json())
.then(console.log(response));


router.get("/proxy",(req,res)=>{
res.text(response);
});


module.exports = router;