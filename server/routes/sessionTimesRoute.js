const express = require('express')
const router = express.Router()
const {getSessionTimes, createSessionTimes, getSessionTime} = require('../controllers/sessionTimesController')


//GET ALl session times
router.get('/', getSessionTimes)
//GET  session time for one movie
router.get('/:id', getSessionTime)



//POST a new session time
router.post('/', createSessionTimes)



module.exports = router 