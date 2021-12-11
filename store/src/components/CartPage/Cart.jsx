import React from 'react';
import "./Styles.css";
import CartItem from './CartItem/CartItem';

const Cart = () => {
    return (
        <div className='cart' >
            <div className="cart_info">
                <h2> Giỏi hàng của bạn </h2>
                <div className="cart_list">
                    <CartItem />
                </div>

            </div>

            <div className="cart_total">

            </div>
        </div>
    )
}

export default Cart
