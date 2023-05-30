const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const dbConnect = require('./config/database')
const app = express()
var bodyParser = require('body-parser')
const studentRoter = require('./routes/student')
const mentorRouter = require('./routes/mentor')
const assignRouter = require('./routes/assignment ')
app.use(express.json())
app.use(bodyParser.json())

app.use('/api/student', studentRoter)
app.use('/api/mentor', mentorRouter)
app.use('/api/mentor', assignRouter)

app.listen(process.env.PORT || 8000, async (err) => {
  dbConnect()
  console.log(`${process.env.PORT} Started server`)
  if (err) {
    console.log(err, 'error in starting server')
  }
})
