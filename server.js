// Dependencies
const express = require('express')

// Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// listen
app.listen(PORT, () => {
    console.log('developing on port', PORT)
})