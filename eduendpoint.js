const express = require('express');
const sequelize = require('./config/db2');
const helmet = require('helmet');
const cors = require("cors");
const app = express()
require('dotenv').config()

const { clientOrigins, serverPort } = require("./config/env.dev");

// include database config file
const db = require("./config/db2");

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
// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
});

// include application routes
require("./routes/api/books")(app);

const PORT = process.env.PORT || 6000

app.listen(PORT, ()=> console.log(`Edutech server is running on port ${PORT}`))