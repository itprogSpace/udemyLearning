"use strict";


const numberOfFilms = +prompt("how much films do you watch");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i =0;

while (i < 3){

    const nameMovie = prompt("Last film which you watch"),
          markMovie = prompt("Give a mark for movie");
    
    if (nameMovie != null && markMovie != null && nameMovie != "" && markMovie != "" && nameMovie.length < 50){
        personalMovieDB.movies[nameMovie] = markMovie;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
    i++;

} 

console.log(personalMovieDB.count);

if ( personalMovieDB.count < 10 ){
    alert("Too far for MovieMan");
} else if( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert("You are amateur");
} else if( personalMovieDB.count > 30){
    alert("You are MovieMan");
} else {
    alert("Is nok");
}