import React from 'react';
import "./Styles.css";
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className='cart' >
            <div className="cart_info">
                <h2> Giỏi hàng của bạn </h2>
                <div className="cart_list">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>

            </div>

            <div className="cart_total">
                <h2> Thông tin đơn hàng </h2>
                <div className="sum-price">
                    <h3> Tổng tiền: </h3>
                    <h3> 300,000đ </h3>
                </div>

            <Link className='link' to={'/checkout'} >
                <button> Thanh toán </button>
            </Link>
            </div>
        </div>
    )
}

export default Cart
