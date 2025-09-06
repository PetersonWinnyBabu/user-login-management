const express = require('express')
const path = require('path')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();



const  PORT = process.env.PORT
const app = express()
app.use(cors({
        origin : 'http://localhost:3000',
        credentials : true
 }))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', require('./routes/auth'))
app.use(bodyParser.json())

app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
});





module.exports = app

