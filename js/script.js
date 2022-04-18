"use strict";


let numberOfFilms;

function start(){
    numberOfFilms = +prompt("How much movies do you watch?", " ").trim();

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How much movies do you watch?", " ");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const nameMovie = prompt("Last film which you watch").trim(),
              markMovie = prompt("Give a mark for movie").trim();

        if (nameMovie != null && markMovie != null && nameMovie != "" && markMovie != "" && nameMovie.length < 50){
            personalMovieDB.movies[nameMovie] = markMovie;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

rememberMyFilms();

console.log(personalMovieDB.count);

function detectPersonalLevel(){
    if ( personalMovieDB.count < 10 ){
        alert("Too far for MovieMan");
    } else if( personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("You are amateur");
    } else if( personalMovieDB.count > 30){
        alert("You are MovieMan");
    } else {
        alert("Is nok");
    }
}

detectPersonalLevel();

function showMyDB(){
    if(!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        const genre = prompt(`Your lovely genres with number ${i+1}`);
              
        if (genre != null  && genre != ""){
            personalMovieDB.genres[i] = genre;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
    return personalMovieDB.genres;
}

console.log(writeYourGenres());

