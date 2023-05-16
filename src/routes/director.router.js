const { getAll, create, getOne, remove, update } = require('../controllers/director.controller');
const express = require('express');

const Director = express.Router();

Director.route('/')
    .get(getAll)
    .post(create);

Director.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = Director;