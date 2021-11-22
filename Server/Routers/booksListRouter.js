const express = require("express");
const {getAllBooks, updateBooks, deleteBook, createBook} = require("../controller/storeController");
const upload = require('../middleware/update');


const booksListRouter = express.Router();

booksListRouter.get("/", getAllBooks);
booksListRouter.put("/", updateBooks);
booksListRouter.delete("/", deleteBook);
booksListRouter.post("/", upload.array("file", 3), createBook);

module.exports = booksListRouter; 