
const Movies = require('../models/moviesModel')
const mongoose = require('mongoose')


//get all movies
const getMovies = async(req, res) => {
    const movies = await Movies.find({})

    res.status(200).json(movies)
}
//get single movie

const getMovie = async(req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No movie exists with ID'})
    }

    const movie = await Movies.findById(id)
    if (!movie){
        return res.status(404).json({error: 'No movie exists'})
    }
    res.status(200).json(movie)
}


//create movie
const createMovie = async(req, res) =>{
    const {title, length, date, description, rating} = req.body

    try{
        const movie = await Movies.create({title, length, date, description, rating})
        res.status(200).json(movie)
    } catch (error){
        res.status(404).json({error: error.message})
    }

}

//delete movie
const deleteMovie = async(req, res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No movie exists with ID'})
    }

    const movie = await Movies.findOneAndDelete({_id: id})
    if (!movie){
        return res.status(404).json({error: 'No movie exists'})
    }

    res.status(200).json(movie)
    
}

//update movie
const updateMovie = async(req, res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No movie exists with ID'})
    }

    const movie = await Movies.findOneAndUpdate({_id: id}, {
        ...req.body
    })


    if (!movie){
        return res.status(404).json({error: 'No movie exists'})
    }

    res.status(200).json(movie)
}

module.exports = {
    getMovies,
    getMovie,
    createMovie,
    deleteMovie,
    updateMovie
}