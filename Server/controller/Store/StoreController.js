const booksList = require("../../Models/Store/booksModels");


const getBooks = async (req, res) => {
    try { 
        const productData = await booksList.find();
        res.status(200).json(productData);
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {getBooks}