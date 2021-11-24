
const getOrderListAction = (orderlist) => {
    try {
        return {
            type: "GET_ORDERLIST",
            payload: orderlist
        }
    } catch (error) {
        console.log(error.message);
    }
}

const confirmOrderItemAction = (orderItem) => {
    try {
        return {
            type: "CONFIRM_ORDEITEM",
            payload: orderItem
        }
    } catch (error) {
        console.log(error.message);
    }
}

const cancelOrderItemAction = (orderItem) => {
    try {
        return {
            type: "CANCEL_ORDEITEM",
            payload: orderItem
        }
    } catch (error) {
        console.log(error.message);
    }
}

export {getOrderListAction, confirmOrderItemAction, cancelOrderItemAction}