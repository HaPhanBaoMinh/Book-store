const booksList = require("../Models/Store/booksModels");

const checkQuantity = async (cart) => { 
    const productData = await booksList.find();
    let result = 1;
    await productData.map(dataItem => {
        cart.map(cartItem => {
            if(dataItem.bookId === cartItem.bookId){
                if(dataItem.bookQuantity < cartItem.count || cartItem.count <= 0){
                    result = -1
                }
            }
        })
    })
    return result
}

module.exports = checkQuantity;