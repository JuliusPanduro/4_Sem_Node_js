import { Router } from "express";
const router = Router();

import { encryptPassword, comparePassword } from "../authentication/password.js";

import jwt from "jsonwebtoken";

import { addNewUser, findUser } from "../database/userHandler.js";

import {authenticateToken} from "../authentication/tokenAuth.js";


router.get('/store', authenticateToken, (req,res)=>{
    res.status(200).send("welcome")

});

router.post('/signup', async (req,res)=>{
   const newUser = {
    email: req.body.email,
    password: await encryptPassword(req.body.password),
    name: req.body.name
};
      const userExist = await findUser(newUser.email);  

      if(!userExist){
                await addNewUser(newUser);
                console.log(newUser);
                res.status(201).send("User Created");       
        } else {
                res.status(409).send("User does already exist");
        }
});

router.post('/login', async (req,res)=>{
        const user = await findUser(req.body.email);
        console.log(user);
        if (user != null){ 
        await comparePassword(req.body.password, user.password);
        const accessToken =  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        res.status(200).send({
                email:user.email,
                name:user.name,
                my_token: accessToken
        });
        console.log("Seems Good, Logged in with token: ", accessToken);
       // res.status(201).send({ accessToken : accessToken });
        }else {
                console.log("Denied")
        return res.status(400).send('Cannot find user')
        }
});
   
export default router


