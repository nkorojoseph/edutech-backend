const express = require('express');
const sequelize = require('./config/db2');
const { auth } = require('express-openid-connect');
const helmet = require('helmet');
const cors = require("cors");
const app = express()
require('dotenv').config()


const { clientOrigins, serverPort } = require("./config/env.dev");

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
  
    res.status(500).json({
      message: "Something went rely wrong",
    });
});

app.use(helmet());
app.use(cors({ origin: clientOrigins }));

app.get('/', (req, res)=> res.send('API returned 200'))


const PORT = process.env.PORT || 6000

app.listen(PORT, ()=> console.log(`Edutech server is running on port ${PORT}`))