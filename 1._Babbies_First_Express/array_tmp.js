let movieId = 1;
const movies = [];

function addMoviesToArray(title,year){
    movies.push({
        id : Number(movieId++),
        title : title,
        year : Number(year)});
}

addMoviesToArray("first",2022);
addMoviesToArray("second",2002);
addMoviesToArray("third",2012);

console.log(movies);

function findMovieById(id){
    id = 2;
    return movies.find(movie => movie.id == id);
}

function updateMovieById(id,title,year){
    let foundMovie = movies.find(movie => movie.id == id);
    console.log(foundMovie);
    movies.splice(movies.indexOf(foundMovie),1,{id,title,year});
} 



function deleteMovieById(id){
   let foundMovie = movies.find(movie => movie.id == id);
   console.log(foundMovie);
   let movieToDelete = movies.indexOf(foundMovie);
   delete movies[movieToDelete];
  //  console.log(movies);

}
//console.log(movies);
updateMovieById(2,"whatup",1854);
console.log(movies);