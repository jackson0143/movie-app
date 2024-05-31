const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema= new Schema({
    title:{
        type: String,
        required: true
    },
    length:{
        type: Number,
        required: true
    },

    date:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },
    

    rating:{
        type: Number,
        required: true
    },
    trailer:{
        type:String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('movies', movieSchema)