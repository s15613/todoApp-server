require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParse = require('body-parser')
const cors = require('cors')

const todoRouter = require('./routes')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
        .then(() => console.log("MongoDB successfully connected"))
  	.catch(err => console.log(err))

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParse.json())

app.use(cors())

app.use('/api/todos',todoRouter)

app.listen(port, () => console.log(`Server is running on port ${port}`))