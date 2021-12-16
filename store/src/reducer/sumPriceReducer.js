
const reducer = (sumPrice = 0, action) => {

    switch (action.type) {
        case 'UPDATE_PRICE':   
            return action.payload
    
        default:
            return sumPrice
    }

}

export default reducer;