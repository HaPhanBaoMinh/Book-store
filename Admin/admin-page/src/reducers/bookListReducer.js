import update from 'react-addons-update';

const reducer = (bookList=[], action) => {

    switch (action.type) {

            case "GET_BOOKLIST":
            return action.payload;

            case "DELETE_BOOK":
                // console.log(action.payload);
            return bookList.filter(book => book._id !== action.payload);

            case "UPDATE_BOOKLIST":
            const objIndex = bookList.findIndex(obj => obj._id === action.payload._id);
            // console.log();
            return update(bookList, {
                [objIndex]: {
                    $set: action.payload
                }
            })
            
    
        default:
            return bookList
    }
}   

export default reducer;