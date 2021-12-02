
const reducer = (monthlyRevenue = [], action) => {
    switch (action.type) {
        case "GET_MONTHREVENUE":
            return action.payload;
    
        default:
            return [];
    }
}

export default reducer;