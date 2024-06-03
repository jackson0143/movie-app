
const SessionTimes = require('../models/sessionTimesModel')
const mongoose = require('mongoose')


//get all session times
const getSessionTimes = async(req, res) => {
    const sessionTimes = await SessionTimes.find({})

    res.status(200).json(sessionTimes)
}
//get session time

const getSessionTime = async(req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No session time with ID'})
    }

    //we search based on movie id
    const sessionTime = await SessionTimes.findOne({ movie_id: id })
    if (!sessionTime){
        return res.status(404).json({error: 'No session time exists'})
    }
    res.status(200).json(sessionTime)
}


//create movie
const createSessionTimes = async(req, res) =>{
    const {movie_id, rowSeats} = req.body

    try{
        const sessionTimes = await SessionTimes.create({movie_id, rowSeats})
        res.status(200).json(sessionTimes)
    } catch (error){
        res.status(404).json({error: error.message})
    }

}



module.exports = {
    getSessionTimes, 
    createSessionTimes,
    getSessionTime
}