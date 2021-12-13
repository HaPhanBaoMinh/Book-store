const express = require("express");
const { getBooks } = require("../controller/Store/StoreController");
const storeRouter = express.Router();

storeRouter.get('/bookList', getBooks)

module.exports = storeRouter;