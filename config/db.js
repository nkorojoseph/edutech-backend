const mysql = require('mysql2');
const config = require('config')

require('dotenv').config()

const con = mysql.createPool({
  host: process.env.DB_HOST || config.get('host'),
  user: process.env.DB_USER || config.get('user'),
  password: process.env.DB_PASSWORD ||  config.get('password'),
  database: process.env.DB_NAME || config.get('database'),
  insecureAuth : true
});

exports.con =  con.promise()

//const sql = 'SELECT * FROM users'
// connectDB = async () => {
//     try {
//           con.execute(sql, (err, result)=> {
//             if (err) throw err;
//             console.log("Connected to database");
           
//           })
//     } catch (error) {
//         console.log('error message', error.message)
//         process.exit(1)
//     }
// }
//exports.connectDB = connectDB;



// module.exports =  connectDB
// module.exports = con.promise()
