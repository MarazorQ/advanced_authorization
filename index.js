const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const port = process.env.PORT
const app = express()

const start = async () =>{
    try{
        app.listen(port, () => console.log(`Server started on ${port} port...`))
    }catch(e){
        console.log('EROR', e)
    }
}

start()