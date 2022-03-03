const router = require("express").Router();
const animals = require("../animals/animalsUtil.js");

router.get("/amountoffavoritanimals", (req,res)=>{
    res.send({ amount: animals.calculateFavoriteAnimals()});
});



router.get("/favoriteanimals",(req,res)=>{
res.redirect("/amountoffavoritanimals");
});


router.get("/cuteanimal", (req,res) =>{
    if(req.query.cute === "Yes"){
      return res.send({ animal: "Giraffe" });
    }
        res.send({ animal: "Snake" });

});


module.exports = router;



/*module.exports = {
    router
};*/