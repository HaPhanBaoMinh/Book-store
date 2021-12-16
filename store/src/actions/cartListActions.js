const addCartItem = (cartItem) => {
    try {
        return{
            type: 'ADD_ITEM',
            payload: cartItem
        }
    } catch (error) {
        console.log(error)
    }
}

const removeCartItem = (removeItemId) => {
    try {
        return{
            type: 'REMOVE_ITEM',
            payload: removeItemId
        }
    } catch (error) {
        console.log(error)
    }
}

const increCount = (ItemId) => {
    try {
        return{
            type: 'ADD_COUNT',
            payload: ItemId
        }
    } catch (error) {
        console.log(error)
    }
}

const reduCount = (ItemId) => {
    try {
        return{
            type: 'REDU_COUNT',
            payload: ItemId
        }
    } catch (error) {
        console.log(error)
    }
}

export { addCartItem, removeCartItem, increCount, reduCount } 