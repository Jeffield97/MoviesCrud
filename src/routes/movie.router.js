const { getAll, create, getOne, remove, update, setActor, setDirector, setGenre } = require('../controllers/movie.controller');
const express = require('express');

const Movie = express.Router();

Movie.route('/')
    .get(getAll)
    .post(create);

Movie.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

Movie.route('/:id/actors')
    .post(setActor)  

Movie.route('/:id/genres')
    .post(setGenre)  

Movie.route('/:id/directors')
    .post(setDirector)  
module.exports = Movie;