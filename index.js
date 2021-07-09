const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const router = require('./router/index.js')

const port = process.env.PORT || 7000
const db = process.env.DB_URL

const app = express()

//middlware
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)

const start = async () =>{
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(port, () => console.log(`Server started on ${port} port...`))
    }catch(e){
        console.log('EROR', e)
    }
}

start()