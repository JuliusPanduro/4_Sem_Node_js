const express = require("express");
const app = express();

const movies = [
{id: 1, title: "Harry Potter 1"},
{id: 2, title: "Harry Potter 2"},
{id: 3, title: "Harry Potter 3"}
];


app.get("/movies", (req,res) =>{
    res.send({data: movies});
});

// foundMovie ? res.send({data:foundMovie}) = like an if statement, if found send back the found movie
// : res.send("Undefined"); = like an else statement.
app.get("/movies/:id",(req,res)=>{
const foundMovie = movies.find(movie => movie.id === Number(req.params.id));
foundMovie ? res.send({data:foundMovie}) : res.sendStatus(404).send({});
});


app.delete("/movies/:id",(req,res)=>{
const movieToDelete = movies.find(movie => movie.id === Number(req.params.id));
delete movies[Number(movieToDelete.id)-1];
res.send({});
});








app.listen(8080,()=>{
    console.log(`Server is now up running on port: `+8080);
});