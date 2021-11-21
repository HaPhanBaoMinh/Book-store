const express = require("express");
const upload = require("../middleware/update");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
const fs = require('fs');
const { connect } = require("http2");


uploadImageRouter = express.Router();

const conn = mongoose.createConnection('mongodb+srv://spiderRumAdmin:spiderRumAdmin@cluster0.mtbg8.mongodb.net/Spiderrum_Store', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// const conn = mongoose.connection;
const myDB = mongoose.connection.useDb('Spiderrum_Store');
let gfs;

// read Stream
conn.once('open', () => {
    // Init stream
    // gfs = Grid(conn.db, mongoose.mongo);
    // gfs.collection('photos');
    
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

// uploadImageRouter.post('/file', upload.single("file"), (req, res) => {
//      console.log(req.body);
//     const imgUrl = `http://localhost:5000/api/file/${req.file.filename}`;
//     // res.send(imgUrl);
//     res.json(req.file)
// })

uploadImageRouter.post('/file', upload.array("file", 3), (req, res) => {
  const files = req.files;
  console.log(req.body);
  // const imgUrl = `http://localhost:5000/api/file/${req.file.filename}`;
  // res.send(imgUrl);
  res.send(req.files)
})

uploadImageRouter.delete('/file/:id', (req, res) => { //file_id
  
  gfs.delete(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
    if (err) return res.status(404).json({ err: err.message });
    // res.redirect("/");
    res.send("Deleted!");

  });
    

})



module.exports = uploadImageRouter;