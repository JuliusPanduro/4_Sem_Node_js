import express from 'express';
const app = express();

import _ from "./password.js";

app.use(express.static("public"));

//Low key security
import helmet from "helmet";
app.use(helmet());


//Sets a limit on the acess on the routes
import rateLimit from "express-rate-limit";

const baseLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(baseLimiter);

const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/auth", authLimiter);



import session from "express-session";

//Creates a session, and 
app.use(session({
    secret: 'keyboard cat you should probaly change this',
    resave: false, //dont trying to resave if there isnt changed any data
    saveUninitialized: true, //When a client for the first time hits a route, a session is created for this client
    cookie: { secure: false } //Means that we are running a https server wich we are not, thats why it is false.
  }));



  import coffeeRouter from "./routers/coffee.js";
  app.use(coffeeRouter);



app.get("/auth", (req,res) =>{
    res.send({message: "You are trying to log in"})
});



//app.get("/computer",(req,res)=>{
//res.sendFile(__dirname + "/public/computer.html");
//});

app.use(ipLogger);

function ipLogger(req,res,next){
    console.log(req.ip);
    next();
};


function guardHouse(req,res,next){
    const username = "Hans";
    if(username === "Hans"){
        req.username = "Hans";
        next();
    }else{
        res.send({message: "You dont have the permission to enter!" });
    }
};

app.get("/frontdoor", guardHouse, (req,res) => {
    res.send({doorbell: `You have permission to enter, ${req.username}.`});
});

function greeter(req,res,next){
console.log("Welcome to the mansion.");
next();
}

app.get("/room", greeter, (req,res,next)=>{
    //res.send({message: "You are in room 1"});
    console.log("You are in room 1 but i will lead you to room 2");
    next();
});

app.get("/room" ,greeter, (req,res)=>{
    res.send({message: "You are in room 2"});
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server in running on port:",PORT);
});