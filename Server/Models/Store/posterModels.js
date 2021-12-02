const mongoose = require("mongoose");
const { Schema } = mongoose;

const posterModels = new Schema({
    bookImages: {
        type: Object,
        default: {}
    },
    linkTo: {
        type: String,
        default: ''
    }
})

const myDB = mongoose.connection.useDb('Spiderrum_Store');
const Poster = myDB.model('Poster', posterModels);

module.exports = Poster;