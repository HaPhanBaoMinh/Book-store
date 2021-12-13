
const reducer = (bookList = [], action) => {

    switch (action.type) {
        case 'GET_BOOKLIST':   
            return action.payload
    
        default:
            return bookList
    }

}

export default reducer;