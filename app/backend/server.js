const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const { connectToDb } = require('./db')

// Load config
dotenv.config({ path: path.join(__dirname, '.env') })

const app = express()

// Middleware
app.use(cors())
app.use(helmet())

// Logging
if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'))
}

// Parsers
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

// Routing
app.use('/', require('./routes/index'))

// connect to database
connectToDb()

// Start server
const port = process.env.PORT || 5000
app.listen(
    port,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`)
)
