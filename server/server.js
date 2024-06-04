
const express = require('express')
const colors = require('colors')
const cors = require('cors')
const mongoose = require('mongoose')

const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

//Express app
const app = express();


//Middleware 
app.use(cors());
app.use(express.json());


//Routes
app.get('/', (req, res)=> res.status(200).json({message:"test"}))
app.use('/api/movies', require('./routes/moviesRoute.js'))
app.use('/api/users', require('./routes/userRoute.js'))
app.use('/api/sessiontimes', require('./routes/sessionTimesRoute.js'))

//Connect to DB
mongoose.connect(process.env.ATLAS_URI)
.then(()=> {
    console.log(`MongoDB Connected: on port ${port}`.cyan.underline);
})
.catch((error) => {
    console.log(error)
})




// start the Express server
app.listen(port, () => console.log(`Server started on port ${port}`))