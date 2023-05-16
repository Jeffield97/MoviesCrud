const express = require('express');
const Actor = require('./actor.router');
const Genre = require('./genre.router');
const Director = require('./director.router');
const Movie = require('./movie.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/actors',Actor)
router.use('/genres',Genre)
router.use('/directors',Director)
router.use('/movies',Movie)

module.exports = router;