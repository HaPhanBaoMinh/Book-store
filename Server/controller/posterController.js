const Poster = require("../Models/Store/posterModels");
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


const getPosterList = async (req, res) => { 
    const posterList = await Poster.find();
    const rePosterList = posterList.reverse(); 
    try {
        res.status(200).json(rePosterList);
    } catch (error) {
        console.log(error.message)
    }
}

const updatePosterList = async (req, res) => {
    const id = req.body.id;
    const newImages = req.body; // body.bookPoster
    try {
        await Poster.findByIdAndUpdate(id, newImages, {new: true});
        await res.status(200).json({"Result":"Updated successful!"});
        
    } catch (error) {
        res.status(400).send();
    }
}

const deletePoster = async (req, res) => { //http://localhost:5000/api/posterList/<poster_Id>?imgId=<imgId>
    const id = req.params.id;
    const imgId = req.query.imgId;
    try {
        gfs.delete(new mongoose.Types.ObjectId(imgId), (err, data) => {
            if (err) return res.status(404).json({ err: err.message });
        });
        await Poster.findByIdAndDelete(id);
        res.status(200).json({"Result":"Delete successful!"})
    } catch (error) {
        res.status(400).json(error.message);
    }
    // res.send(imgId);
} 

const postPoster = async (req, res) => { 
    const newPost = await {...req.body, bookImages: req.file}
    const PosterItem = await new Poster(newPost);
    try {
        await PosterItem.save();
        res.status(200).json({result: "Create successful!" }) 
     } catch (error) {
        res.status(404).send(error.message) 
     }
    // res.send(PosterItem) 
}

module.exports = {getPosterList, updatePosterList, deletePoster, postPoster};