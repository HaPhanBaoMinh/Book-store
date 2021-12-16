import React from 'react';
import formatCash from '../../functions/formatMoney';
import "./Styles.css";

const CheckoutItem = ({cartItem}) => {
    return (
        <div className='checkout_item' >
            <h4 className='item_name' > {cartItem.bookName} </h4>
            <h4>SL: {cartItem.count} </h4>
            <h4> {formatCash(cartItem.bookPrice.newPrice)}đ </h4>
        </div>
    )
}

export default CheckoutItem
