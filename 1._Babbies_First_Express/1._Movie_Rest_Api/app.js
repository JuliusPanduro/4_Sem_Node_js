const express = require("express");
const app = express();
app.use(express.json());


let movieId = 1;
const movies = [];

function addMovieToArray(title,year){
    movies.push({
        id : Number(movieId++),
        title : title,
        year : Number(year)});
}

addMovieToArray("first",2022);
addMovieToArray("second",2002);
addMovieToArray("thrid",2012);

function findMovieById(id){
    return movies.find(movie => movie.id === id);
}

function updateMovieById(id,title,year){
    let foundMovie = movies.find(movie => movie.id === id);
    console.log(foundMovie);
    movies.splice(movies.indexOf(foundMovie),1,{id,title,year});
} 

function patchMovieById(id,title,year){
    let foundMovie = movies.find(movie => movie.id === id);
    if (foundMovie.title != title || foundMovie.year != year){
        movies.splice(movies.indexOf(foundMovie),1,{id,title,year});
    }
}


function deleteMovieById(id){
    let foundMovie = movies.find(movie => movie.id === id);
    console.log(foundMovie);
    let movieToDelete = movies.indexOf(foundMovie);
    delete movies[movieToDelete];

}

//Endpoints

//get all
app.get("/movies",(req,res)=>{
    res.send(movies);
    //res.json(movies);
});

//get movie based on id
app.get("/movies/:id",(req,res)=>{
    console.log(req.params.id);
    res.send(Object.values(findMovieById(Number(req.params.id))));
   // res.json(findMovieById(req.params.id));
});

//post a movie
app.post("/movies",(req,res)=>{
    addMovieToArray(req.body.title,req.body.year);
    res.send("Movie added.");
});

//update the whole movie based on id
app.put("/movies/:id",(req,res)=>{
    updateMovieById(Number(req.params.id),req.body.title,req.body.year);
    res.send("Movie has been updated");
});


app.patch("/movies/:id", (req,res)=>{
    patchMovieById(Number(req.params.id),req.body.title,req.body.year);
    console.log(movies);
    res.send("Movie Patched.");
});


app.delete("/movies/:id",(req,res)=>{
    deleteMovieById(Number(req.params.id));
    res.send(req.params.id + " is now removed");
});




//set up the server on port 8080 and this should be a the button
app.listen(8080);