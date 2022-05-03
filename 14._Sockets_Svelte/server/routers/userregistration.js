import { Router } from "express";
const router = Router();

router.get("/api/fetchuser", (req,res)=>{
res.send({data: req.session.username });
});

router.get("/api/logout",(req,res)=>{
   /* req.session.username != undefined
    res.send({data: "Cya!"});*/
    // For destroying the whole session when logged out
     req.session.destroy(()=>{
        res.send({data: "Cya!"});
    });

});

router.post("/api/registeruser",(req,res)=>{
    req.session.username = req.body.username;
    res.send({ data: "Your name is: " });
});






export default router;