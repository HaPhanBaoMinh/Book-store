const getBookListAction = (data) => {
    try {
        return {
            type: 'GET_BOOKLIST',
            payload: data
        }
    } catch (error) { 
        console.log(error.message);
    } 
}

const deleteBook = (id) => {
    try {
        return {
            type: 'DELETE_BOOK',
            payload: id
        }
    } catch (error) {
        console.log(error.message);
    }
}

const updateBookList = (newbook) => {
    try {
        return{
            type: "UPDATE_BOOKLIST",
            payload: newbook
        }
    } catch (error) {
        console.log(error.message);
    }
}

export {getBookListAction, deleteBook, updateBookList}