const {Sequelize, DataTypes} = require('sequelize')

//import the sequelize dbconnection we created earlier
const sequelize = require('../config/db2')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    uploaded_by: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'users'
  }) 

  
module.exports = User