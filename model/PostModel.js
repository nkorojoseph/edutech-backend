const {Sequelize, DataTypes} = require('sequelize')

//import the sequelize dbconnection we created earlier
const sequelize = require('../config/db2')

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    post_title: {
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
    tableName: 'post'
  }) 

  
module.exports = Post