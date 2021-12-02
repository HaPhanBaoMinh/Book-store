const reducer = (posterList = [], action) => {

    switch (action.type) {
        case "GET_POSTERLIST":
            return action.payload;

        case "DELETE_POSTERITEM":
            return posterList.filter(poster => poster._id !== action.payload);
    
        default:
            return posterList;
    }

}

export default reducer