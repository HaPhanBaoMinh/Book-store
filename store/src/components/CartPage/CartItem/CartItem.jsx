import React, {useState} from 'react';
import "./Styles.css";
import { RiDeleteBinLine } from "react-icons/ri";

const CartItem = () => {
    const [count, setcount] = useState(1)
    
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
                <button onClick={() => {
                    setcount(count => count + 1)
                }} > + </button>
                <h3> {count} </h3>
                <button onClick={() => 

                    count <= 1 ? count :  setcount(count => count - 1)
                    
                } > - </button>
            </div>

            <div className="item_price">
                <h5 className='newprice' > 295,000đ </h5>
                <h5 className='oldprice' > (318,000đ) </h5>
            </div>

            <div className="item_price">
                <h5 className='newprice' > Thành tiền: </h5>
                <h4 className='total' > 295,000đ </h4>
            </div>

            <div className="item_price">
                <button> <RiDeleteBinLine /> </button>
            </div>
        </div>
    )
}

export default CartItem
