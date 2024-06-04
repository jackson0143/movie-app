const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{ 
        type: String, 
        required: true
    },


    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },

})

// signup method STATIC
userSchema.statics.signup = async function (email, password, firstname, lastname) {



    //validate inputs

    if (!email || !password || !firstname || !lastname){
        throw Error('All fields must be filled')
    }

    //check if email exists
    const exists = await this.findOne({email})
    if (exists){
        throw Error('Email already in use')
    }
    //encrypt password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({email, password: hash, firstname, lastname})

    return user
}


// login method STATIC
userSchema.statics.login = async function (email, password){

    //validate
        if (!email || !password){
        throw Error('All fields must be filled')
    }
    

    //find user
    const user = await this.findOne({email})
    if (!user){
        throw Error('Incorrect email or password')
    }
    //check password
    const match = await bcrypt.compare(password, user.password)
    if (!match){
        throw Error('Incorrect email or password')
    }

    return user
}


module.exports = mongoose.model('User', userSchema)