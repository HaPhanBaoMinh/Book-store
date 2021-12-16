import React, {useState} from 'react';
import "./Styles.css";
import formatCash from "../../../../functions/formatMoney";
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../../../actions/cartListActions';


const Item = ({book}) => { 
    const dispatch = useDispatch();
    const { bookName, bookId, bookPrice} = book;

    const cartList = useSelector(state => state.cartList);

    const onAddItem = (cartItem) => {
        if(cartList.find(cartitem => cartitem.bookId === cartItem.bookId)) return;
        dispatch(addCartItem(cartItem));
    }

    return (
        <div className='item'>
            <div className="item_img">
                 <img src={`http://localhost:5000/api/image/${book.bookImages[0].filename}`} alt="" />
                <button onClick={() => {
                    onAddItem({ bookName, bookId, count: 1, bookImage: book.bookImages[0].filename, bookPrice})
                }} >  Thêm vào giỏ </button>
            </div>

            <div className="item_price">
                <h4 className='item_price_name'> {book.bookName}  </h4>
                <div className="price-info">
                    <h5 className='price' > {formatCash(book.bookPrice.newPrice)}đ </h5>
                    <h5 className='old-price' > {formatCash(book.bookPrice.newPrice)}₫ </h5>
                </div>
            </div>
        </div> 
    )
}

export default Item
