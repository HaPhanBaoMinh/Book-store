import React, {useEffect, useState} from 'react';
import "./Styles.css";
import CartItem from './CartItem/CartItem'; 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import formatCash from '../../functions/formatMoney';
import { updateSumPrice } from '../../actions/sumPriceActions';

const Cart = () => {
    const cartList = useSelector(state => state.cartList);
    const dispatch = useDispatch();
    const [sumPrice, setsumPrice] = useState(0)
    // console.log(cartList);
    
    const getSumPrice = () => {
        let sumPrice = 0;
        cartList.map(item => {
            sumPrice += item.count * item.bookPrice.newPrice
        })
        setsumPrice(sumPrice);
        dispatch(updateSumPrice(sumPrice));
    }

    

    return (
        <div className='cart' >
            <div className="cart_info">
                <h2> Giỏi hàng của bạn </h2>
                <div className="cart_list">
                        {
                    cartList.map(cartItem => (
                        <CartItem cartItem={cartItem} key={cartItem.bookImage} getSumPrice={getSumPrice} />
                    ))
                        }
                </div>

            </div>

            <div className="cart_total">
                <h2> Thông tin đơn hàng </h2>
                <div className="sum-price">
                    <h3> Tổng tiền: </h3>
                    <h3> {formatCash(sumPrice)}đ </h3>
                </div>

            <Link className='link' to={'/checkout'} >
                <button> Thanh toán </button>
            </Link>
            </div>
        </div>
    )
}

export default Cart
