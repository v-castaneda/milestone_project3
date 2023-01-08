const express = require('express')
const usersRouter = express.Router()

// INDEX
usersRouter.get('/', async(req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// NEW

// SHOW

// EDIT

// UPDATE

// CREATE 

// DELETE

module.exports = usersRouter