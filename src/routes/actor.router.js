const { getAll, create, getOne, remove, update } = require('../controllers/actor.controller');
const express = require('express');

const Actor = express.Router();

Actor.route('/')
    .get(getAll)
    .post(create);

Actor.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = Actor;