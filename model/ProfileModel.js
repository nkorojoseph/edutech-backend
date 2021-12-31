const {Sequelize, DataTypes} = require('sequelize')

//import the sequelize dbconnection we created earlier
const sequelize = require('../config/db2')

module.exports = (sequelize, Sequelize) => {
    const Profile = sequelize.define('Profile', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Profile_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
     
    }, {
        tableName: 'profiles'
      }) 

      return Profile
}
