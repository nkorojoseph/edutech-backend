// const {Sequelize, DataTypes} = require('sequelize')

// //import the sequelize dbconnection we created earlier
// const sequelize = require('../config/db2')

// module.exports = (sequelize, Sequelize) => {
//     const Book = sequelize.define('Book', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true
//         },
//         book_title: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         uploaded_by: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         uploaded_at:{
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     }, {
//         tableName: 'books'
//       }) 

//  return Book
// }


module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      name: {
        type: Sequelize.STRING(100),
      },
      price: {
        type: Sequelize.INTEGER,
      },
      language: {
        type: Sequelize.STRING(100),
      },
      total_pages: {
        type: Sequelize.INTEGER,
      },
    }, {
        timestamps: false
    });
  
    return Book;
  };
  