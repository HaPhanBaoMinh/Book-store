import update from 'react-addons-update';

const reducer = (orderList = [], action) => {

    switch (action.type) {
        case "GET_ORDERLIST":
            // console.log(action.payload);
            return action.payload;

        case "CONFIRM_ORDEITEM":
            const objIndex = orderList.findIndex(obj => obj._id === action.payload._id);
            return update(orderList, {
                [objIndex]: {
                    confirm: {$set: 1}
                }
            })

            case "CANCEL_ORDEITEM":
                 const index = orderList.findIndex(obj => obj._id === action.payload._id);
                return update(orderList, {
                    [index]: {
                        confirm: {$set: -1}
                    }
                })
    
        default:
            return [];
    }
 
}

export default reducer