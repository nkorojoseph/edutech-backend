const { checkJwt } = require("../../middleware/auth-jwt-mw");



module.exports = function (app) {
  
    const book = require("../../controllers/bookController");
  
    // Create a new book
    app.post("/api/book",checkJwt, book.create);
  
    // Retrieve all book
    app.get("/api/books",checkJwt,  book.findAll);
  
    // Retrieve a single book by Id
    app.get("/api/books/:bookId",checkJwt,  book.findByPk);
  
    // Update a book with Id
    app.put("/api/books/:bookId",checkJwt,  book.update);
  
    // Delete a book with Id
    app.delete("/api/books/:bookId",checkJwt,  book.delete);
  };
  