require('dotenv').config({path: './config.env'});
const express = require('express');
const connectDB  = require("./config/db");


// connecting database 

connectDB();


const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 4000;

const server = app.listen( PORT, () => console.log(`server is running on port ${PORT}`))


//handle rejection
process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
} )
