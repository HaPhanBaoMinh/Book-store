import React, {useState} from 'react';
import "./Styles.css";
import formatCash from "../../../../functions/formatMoney";

const Item = ({book}) => { 
    return (
        <div className='item'>
            <div className="item_img">
                 <img src={`http://localhost:5000/api/image/${book.bookImages[0].filename}`} alt="" />
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
