const express = require("express");
const upload = require("../middleware/update");
const mongoose = require("mongoose");
const fs = require('fs');
const verifyToken = require("../middleware/auth");
require('dotenv').config()


uploadImageRouter = express.Router();

const MONGO_STORE = process.env.MONGO_STORE

const conn = mongoose.createConnection(MONGO_STORE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let gfs;

// read Stream
conn.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, { 
      bucketName: "photos"
    } )
});

uploadImageRouter.get("/file/:filename", (req, res, next) => {
  gfs.find({filename: req.params.filename}).toArray((err, files) => {
    if(!files[0] || files.length === 0){
      return res.status(200).json({
        success: false,
        message: "No files available"
      })
    }
 
    res.status(200).json({
      success: true,
      file: files
    })
  })
})


uploadImageRouter.get("/file", (req, res, next) => {
  gfs.find().toArray((err, files) => {
    if(!files || files.length === 0){
      return res.status(200).json({
        sucess: false,
        message: "No files available"
      });
    }

    files.map(file => {
      if(file.contenType === "image/jpeg"
      || file.contenType === "image/png" 
      || file.contenType === "image/sgv+xml"
      ){
        file.isImage = true;
      } else {
        file.isImage = false;
      }
    });

    res.status(200).json({
      success: true,
      files
    })
  })
} )

uploadImageRouter.get("/image/:filename", (req, res) => {
  // console.log('id', req.params.id)
  const file = gfs.find({
      filename: req.params.filename
    }).toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist"
        });
      }
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});



uploadImageRouter.post('/file',verifyToken, upload.array("file", 12), (req, res) => {
  res.send(req.files)
}) 

uploadImageRouter.delete('/file/:idItem', (req, res) => { //file_id
  
  gfs.delete(new mongoose.Types.ObjectId(req.params.idItem), (err, data) => {
    if (err) return res.status(404).json({ err: err.message }); 
    res.redirect("/");
    res.send("Deleted!");

  });
    

})



module.exports = uploadImageRouter;