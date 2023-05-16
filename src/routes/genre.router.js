const { getAll, create, getOne, remove, update } = require('../controllers/genre.controller');
const express = require('express');

const Genre = express.Router();

Genre.route('/')
    .get(getAll)
    .post(create);

Genre.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = Genre;