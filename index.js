const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT || 7000
const db = process.env.DB_URL

const app = express()

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