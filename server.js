// Dependencies
const express = require('express')
const methodOverride = require('method-override')

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// user routes
const usersController = require('./controllers/users_controller.js')
app.use('/users', usersController)

// 404 page
app.get('*', (req, res) => {
    res.send('404 - see server.js')
})

// listen
app.listen(PORT, () => {
    console.log('developing on port', PORT)
})