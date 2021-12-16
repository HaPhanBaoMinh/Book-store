
const reducer = (cartList = [], action) => {

    switch (action.type) {
        case 'ADD_ITEM':   
            return [
                ...cartList,
                action.payload
            ]

        case 'REMOVE_ITEM':
            return cartList.filter(item => item.bookId !== action.payload);

        case 'ADD_COUNT':
            const indexOf = cartList.findIndex(item => item.bookId === action.payload);
            cartList.splice(indexOf, 1, { ...cartList[indexOf], count: cartList[indexOf].count + 1 } );
            // console.log(cartList)
            return cartList;
        
        case 'REDU_COUNT':
            const indexof = cartList.findIndex(item => item.bookId === action.payload);
            cartList.splice(indexof, 1, { ...cartList[indexof], count: cartList[indexof].count - 1 } );
            // console.log(cartList)
            return cartList;
            
        case 'REMOVE_ALL':
            return []
    
        default:
            return cartList
    }

} 

export default reducer;