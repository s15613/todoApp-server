const express = require('express')
const mongoose = require('mongoose')
const bodyParse = require('body-parser')

const todoRouter = require('./routes')

mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true })
        .then(() => console.log("MongoDB successfully connected"))
  		.catch(err => console.log(err))

const app = express()

app.use(bodyParse.json())

app.use('/api/todos',todoRouter)

app.listen(5000, () => console.log('Server is running on port 5000'))