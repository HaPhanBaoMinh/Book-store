
const reducer = (posterList = [], action) => {

    switch (action.type) {
        case 'GET_POSTERLIST':   
            return action.payload
    
        default:
            return posterList
    }

}

export default reducer;