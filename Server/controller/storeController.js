const booksList = require("../Models/Store/booksModels");
const mongoose = require("mongoose");


const conn = mongoose.createConnection('mongodb+srv://spiderRumAdmin:spiderRumAdmin@cluster0.mtbg8.mongodb.net/Spiderrum_Store', {
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



const getAllBooks = async (req, res) => {
    try {
        const productData = await booksList.find();
        res.status(200).json(productData);
    } catch (error) {
        console.log(error.message)
    }
}

const updateBooks = async (req, res) => {
    const id = req.body._id;
    const updatedBooks = {...req.body, bookImages: req.files};
    try {
        await booksList.findByIdAndUpdate(id, updatedBooks, {new: true});
        await res.status(200).json({"Result":"Updated successful!"});
        
    } catch (error) {
        res.status(400).send();
    }
}

const deleteBook = async (req, res) => {
    const  id = req.body.id;
    const  img_id = req.body.img_id;
   try {
      await booksList.findByIdAndDelete(id);
      gfs.delete(new mongoose.Types.ObjectId(img_id), (err, data) => {
        if (err) return res.status(404).json({ err: err.message });
      });

      
      res.status(200).json({result: "Delete successful!" });
   } catch (error) {
      res.status(400).json(error.message);
   }
} 

const createBook = async (req, res) => {
    const newBook = await {...req.body, bookImages: req.files, booktags: req.body.booktags }
    console.log(newBook)
    const newBookPost = new booksList(newBook);
    try {
       await newBookPost.save();
       res.status(200).send(newBook)
    } catch (error) {
       res.status(404).send(error.message)
    }
    // console.log(req.body.booktags);
    // res.send();
}

module.exports = {getAllBooks, updateBooks, deleteBook, createBook}; 
