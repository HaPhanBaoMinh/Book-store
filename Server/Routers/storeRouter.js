const express = require("express");
const { createOrderList } = require("../controller/orderListController");
const { getPosterList } = require("../controller/posterController");
const { getBooks } = require("../controller/Store/StoreController");
const storeRouter = express.Router();

storeRouter.get('/bookList', getBooks);
storeRouter.get('/poster', getPosterList);
storeRouter.post('/orderList', createOrderList);

module.exports = storeRouter; 