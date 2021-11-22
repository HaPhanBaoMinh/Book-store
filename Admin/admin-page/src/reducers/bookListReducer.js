const reducer = (bookList=[], action) => {

    switch (action.type) {

        case "GET_BOOKLIST":
            // console.log(action.payload);
            return action.payload;

            case "DELETE_BOOK":
                // console.log(action.payload);
            return bookList.filter(book => book._id !== action.payload)
    
        default:
            return []
    }
}

export default reducer;