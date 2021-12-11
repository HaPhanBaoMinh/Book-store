import React, {useState} from 'react';
import "./Styles.css";

const img = [
    'https://product.hstatic.net/200000123069/product/proposal_ntmnst_1706a93213ea40e397be5bbdaced5977_grande.png',
    'https://product.hstatic.net/200000123069/product/mockup04_6a469fec3bc44715a104131f921e2268_grande.jpg'
]

const Item = () => {
    const [isHover, setisHover] = useState(false)


    return (
        <div className='item' onMouseOver={() => setisHover(true) } onMouseOut={() => setisHover(false) }  >
            <div className="item_img">
                 {isHover ? <img src={img[1]} alt="" /> : <img src={img[0]} alt="" /> } 
            </div>

            <div className="item_price">
                <h4 className='item_price_name'> Ngành sáng tạo và Nghệ thuật có gì?  </h4>
                <div className="price-info">
                    <h5 className='price' > 149,000₫ </h5>
                    <h5 className='old-price' > 169,000₫ </h5>
                </div>
            </div>
        </div>
    )
}

export default Item
