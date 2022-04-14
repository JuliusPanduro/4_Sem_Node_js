require('dotenv').config();

const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(express.json());

// Import Routes
//const authRoute = require('./routes/auth');

// Route Middlewares
//app.use('/api/users', authRoute);

const posts = [{
    username: 'Julius',
    title: 'post 1'
},
{
    username: 'Kay',
    title: 'post 2'
}]

const users = []

app.get('/users', authenticateToken, (req,res) =>{
    res.json(posts.filter(post => post.username === req.user.username));
});


app.post('/users', async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashedPassword)
        const user = { username : req.body.name, password : hashedPassword}
        users.push(user);
        res.status(201).send();
    }catch{
        res.status(500).send();
    }
});

/*app.post('/login', async (req,res)=>{
    const username = req.body.username;
    const user = { name : username };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken : accessToken })
})
*/

app.post('/users/login', async (req,res)=>{
    const username = users.find(user => user.username = req.body.username);
        if (username == null){
            return res.status(400).send('Cannot find user');
        }
    try{
      if (await bcrypt.compare(req.body.password, username.password)) {
            const user = { name : username }
            const accessToken =  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        res.json({ accessToken : accessToken })
        } else {
        res.send('Not Allowed')
      }
    } catch {
        res.status(500).send();
    }
}); 


function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401);

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(error,user)=>{
        if(error) return res.sendStatus(403)
        req.user = user;
        next();
    });
};


const PORT = 3000;
app.listen(process.env.PORT || PORT, ()=>{ console.log("Server is running on port:", PORT);});