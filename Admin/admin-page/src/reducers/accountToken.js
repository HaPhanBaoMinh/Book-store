const reducer = (actountToken=[], action) => {

    switch (action.type) {

        case "LOGIN":
        return action.payload
    
        default:
            return actountToken
    }
}   

export default reducer;