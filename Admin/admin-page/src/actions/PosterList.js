
const getPosterList = (orderList) => {
    try {
        return {
            type: "GET_POSTERLIST",
            payload: orderList
        }
    } catch (error) {
        console.log(error.message);
    } 
}

const deleteOrderItem = (posterId) => {
    try {
        return {
            type: "DELETE_POSTERITEM",
            payload: posterId
        }
    } catch (error) {
        throw error
    }
}

export {getPosterList, deleteOrderItem};