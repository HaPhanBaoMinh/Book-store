import React, {useEffect, useState} from 'react';
import "./Styles.css";
import { RiDeleteBinLine } from "react-icons/ri";
import formatCash from '../../../functions/formatMoney';
import { useDispatch } from 'react-redux';
import { increCount, reduCount, removeCartItem } from '../../../actions/cartListActions';

const CartItem = ({cartItem, getSumPrice}) => {
    const [count, setcount] = useState(cartItem.count);
    const dispatch = useDispatch();
    useEffect(() => {
        getSumPrice();
    })

    const onRemove = (removeItemId) => {
        dispatch(removeCartItem(removeItemId));
    }

    const onReduCount = () => {
        if(count === 1) return 
        setcount(count => count - 1);
        dispatch(reduCount(cartItem.bookId));
    }

    const onIncreCount = () => {
        setcount(count => count + 1);
        dispatch(increCount(cartItem.bookId));
    }

    return (
        <div className='CartItem'>
            <div className="item-name">
                <div className="cartitem_img">
                    <img src={`http://localhost:5000/api/image/${cartItem.bookImage}`}  alt="" />
                </div>
                    <h4 className='cartitem_name'> {cartItem.bookName} </h4>
            </div>
 
            <div className="item_count">
            <button onClick={() => onReduCount()
                } > - </button>
                <h3> {count} </h3>
               
                <button onClick={() => onIncreCount()} > + </button>
            </div>

            <div className="item_price">
                <h5 className='newprice' > {formatCash(cartItem.bookPrice.newPrice)}đ </h5>
                <h5 className='oldprice' > ({formatCash(cartItem.bookPrice.oldPrice)}đ) </h5>
            </div>

            <div className="item_price">
                <h5 className='newprice' > Thành tiền: </h5>
                <h4 className='total' > {formatCash(cartItem.bookPrice.newPrice * count )}đ </h4>
            </div>

            <div className="item_price">
                <button> <RiDeleteBinLine className='bin' onClick={() => {
                    onRemove(cartItem.bookId)
                }} /> </button>
            </div>
        </div>
    )
}

export default CartItem
