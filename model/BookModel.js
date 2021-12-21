const {Sequelize, DataTypes} = require('sequelize')

//import the sequelize dbconnection we created earlier
const sequelize = require('../config/db2')

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    book_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    uploaded_by: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    uploaded_at:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'books'
  }) 

  
module.exports = Book