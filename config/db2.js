const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    define: {
        freezeTableName: true
      },
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.book = require("../model/BookModel")(sequelize, Sequelize);
db.paper = require("../model/PaperModel")(sequelize, Sequelize);
db.post = require("../model/PostModel")(sequelize, Sequelize);
db.Profile = require("../model/ProfileModel")(sequelize, Sequelize);
db.user = require("../model/UserModel")(sequelize, Sequelize);

module.exports = db;
