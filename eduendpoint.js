const express = require('express');
const sequelize = require('./config/db2');
const { auth } = require('express-openid-connect');
const app = express()
require('dotenv').config()

app.use(
  auth({
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    authRequired: false,
    auth0Logout: true
  })
);


// app.use(express.urlencoded({extended: true})); 
// app.use(express.json());

// app.use((err, req, res, next) => {
//     console.log(err.stack);
//     console.log(err.name);
//     console.log(err.code);
  
//     res.status(500).json({
//       message: "Something went rely wrong",
//     });
// });


// ( async () => {
//       try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully through Sequelize.');
//         await sequelize.close()
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
//   }
// )()


// app.get('/', (req, res)=> res.send('API returned 200'))

// app.use('/api/users', require('./routes/api/users'))
// app.use('/api/profile', require('./routes/api/profile'))
// app.use('/api/posts', require('./routes/api/posts'))
// app.use('/api/auth', require('./routes/api/auth'))
// app.use('api/paper', require('./routes/api/paper'))

const PORT = process.env.PORT || 6000

app.listen(PORT, ()=> console.log(`Edutech server is running on port ${PORT}`))