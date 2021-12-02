const express = require("express");
const {getPosterList, updatePosterList, deletePoster, postPoster} = require("../controller/posterController");
const upload = require('../middleware/update');

const posterListRouter = express.Router();

posterListRouter.post("/",upload.single("file"), postPoster);
posterListRouter.get("/", getPosterList);
posterListRouter.put("/", updatePosterList);
posterListRouter.delete("/:id", deletePoster);

module.exports = posterListRouter;       