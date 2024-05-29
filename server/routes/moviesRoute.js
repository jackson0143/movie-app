const express = require('express')
const router = express.Router()
const {getMovies, getMovie, createMovie, deleteMovie, updateMovie} = require('../controllers/moviesController')

//GET ALl movies
router.get('/', getMovies)


//GET one movie
router.get('/:id',getMovie)


//POST a new movie
router.post('/', createMovie)

//DELETE a movie
router.delete('/:id', deleteMovie)

//UPDATE a movie
router.patch('/:id', updateMovie)

module.exports = router