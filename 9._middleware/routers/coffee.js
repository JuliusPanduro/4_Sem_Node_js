import Router from "express";
const router = Router();

router.get("/fillcoffee", (req,res) =>{
    req.session.coffeeAmount = 100;
    res.send();
});


//When there is below 0 amout of coffee it redirects to fill coffee and fill up the cup again.
router.get("/drinkcoffee", (req,res)=>{
    req.session.coffeeAmount -= 40;
    if(req.session.coffeeAmount < 0){
        res.redirect("/fillcoffee")
    }else{
 res.send({message: `You have ${req.session.coffeeAmount} left`});
    }
   
});

export default router;
