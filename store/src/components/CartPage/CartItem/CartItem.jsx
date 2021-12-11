import React from 'react';
import "./Styles.css";

const CartItem = () => {
    return (
        <div className='CartItem'>
            <div className="item-name">
                <div className="cartitem_img">
                    <img src="  //product.hstatic.net/200000123069/product/hrv-combo-it_756d2907cf3043e3b1d736cc7a21a2de_medium.jpg" alt="" />
                </div>
                    <h4 className='cartitem_name'> 
Sách Chủ nghĩa Khắc kỷ - Seneca: Những Bức Thư Đạo Đức - Triết học thức hành Đi tìm bình yên trong tâm trí </h4>
            </div>

            <div className="item_count">
                
            </div>
        </div>
    )
}

export default CartItem
