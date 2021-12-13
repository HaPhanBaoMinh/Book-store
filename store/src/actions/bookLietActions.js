const getBookList = (data) => {
    try {
        return{
            type: 'GET_BOOKLIST',
            payload: data
        }
    } catch (error) { 
        console.log(error.message);
    } 
}

export { getBookList };