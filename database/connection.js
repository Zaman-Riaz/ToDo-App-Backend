
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

const mongoose = require('mongoose')

// Database connection
const DB = process.env.DATABASE
mongoose.connect(DB,
    {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Connection successful')
    }).catch((err) => {
        console.log('Connection failed', err)
    })
