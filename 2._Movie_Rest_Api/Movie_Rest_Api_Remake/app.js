const express = require("express");
const app = express();





app.use(express.json());









const movies = [
{id: 1, title: "Harry Potter 1"},
{id: 2, title: "Harry Potter 2"},
{id: 3, title: "Harry Potter 3"}
];

let CURRENT_ID = 3;


app.get("/movies", (req,res) =>{
    res.send({data: movies});
});

// foundMovie ? res.send({data:foundMovie}) = like an if statement, if found send back the found movie
// : res.send("Undefined"); = like an else statement.
app.get("/movies/:id",(req,res)=>{
    const foundMovie = movies.find(movie => movie.id === Number(req.params.id));
    foundMovie ? res.send({data:foundMovie}) : res.sendStatus(404).send({});
});

app.post("/movies",(req,res) =>{
    const movieToCreate = req.body;
    movieToCreate.id = ++CURRENT_ID;
    movies.push(movieToCreate);

    res.send({ data:movieToCreate});
});

app.patch("/movies/:id",(req,res)=>{
    const foundMovieIndex = movies.find(movie => movie.id === Number(req.params.id));

    if (foundMovieIndex !== -1){
    const foundMovie = movies[foundMovieIndex];
    const movieToUpdateWith = { ...foundMovie, ...req.body, id: foundMovie.id}
    movies[foundMovieIndex] = movieToUpdateWith;

    res.send({data:movieToUpdateWith});

    } else {
        res.status(404).send({});
    }
  
});


app.delete("/movies/:id",(req,res)=>{
    const movieToDeleteIndex = movies.find(movie => movie.id === Number(req.params.id));
    if (movieToDeleteIndex !== -1){
    movies.splice(movieToDeleteIndex,1);
    res.send({});
}else
    {
    res.status(404).send({ });
    }
});








app.listen(8080,()=>{
    console.log(`Server is now up running on port: `+8080);
});