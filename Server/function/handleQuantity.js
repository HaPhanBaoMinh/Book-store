const booksList = require("../Models/Store/booksModels");

const handleQuantity = async (orderItem) => {
    orderItem.cart.map(async item => {
        let OrderBook = await booksList.find({bookId: item.bookId})
        OrderBook = OrderBook[0];

       await booksList.findOneAndUpdate({bookId: item.bookId}, {bookQuantity: OrderBook.bookQuantity - item.count} );
       
    //    console.log(item);
    
    })
}

module.exports = handleQuantity;
