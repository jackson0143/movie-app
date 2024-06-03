const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema


//First create the individual seat schemas
const seatSchema= new Schema({
    number:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true,
        enum:['available', 'reserved', 'unavailable']
    }
    
})

//the row schema will contain all the seats, followed by row number
const rowSchema = new Schema({

    row:{
        type:String,
        required: true
    }, 

    seats:[seatSchema]
})

//put it all together to create a sessionTimesSchema
const sessionTimesSchema= new Schema({
    movie_id:{
        type: ObjectId,
        required: true
    },
    rowSeats:[rowSchema]

    
})

module.exports = mongoose.model('sessionTime',sessionTimesSchema);