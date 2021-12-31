const {Sequelize, DataTypes} = require('sequelize')

//import the sequelize dbconnection we created earlier
const sequelize = require('../config/db2')

module.exports = (sequelize, Sequelize) => {
    const Paper = sequelize.define('Paper', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        paper_title: {
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
        tableName: 'papers'
      }) 

    return Paper
}

