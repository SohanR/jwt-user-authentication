const express = require('express');

require('dotenv').config({path: './config.env'});
const connectDB  = require("./config/db");


// connecting database 

connectDB();


const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 4000;

app.listen( PORT, () => console.log(`server is running on port ${PORT}`))


