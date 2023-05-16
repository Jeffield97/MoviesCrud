const { getAll, create, getOne, remove, update, setActor } = require('../controllers/movie.controller');
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
    .post(setActor)  

Movie.route('/:id/directors')
    .post(setActor)  
module.exports = Movie;