import React from 'react'
import "./Styles.css";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className="footer_content">
                <div className="footer_item">
                        <h3 className='item_header'> giới thiệu </h3>

                        <div className="item_content">
                            <p> 
                                Sản phẩm cá nhân - Hà Phan Bảo Minh - haphanbaoinh9674@gmail.com - 0912782832
                            </p>

                            <div className="item_media">
                                <FaFacebook />
                                <FaGoogle />
                                <FaYoutube />

                            </div>
                        </div>
                </div>

                <div className="footer_item">
                        <h3 className='item_header'> pháp lý & giới thiệu </h3>

                        <div className="item_list">
                            <span> - </span>  <h5> Tìm kiếm </h5>
                            <span> - </span>  <h5> Giới thiệu </h5>
                            <span> - </span>  <h5> Điều khoản và điều kiện giao dịch chung </h5>
                            <span> - </span>  <h5> Chính sách giao nhận sản phẩm </h5>
                            <span> - </span>  <h5> Chính sách bảo vệ thông tin cá nhân </h5>
                            <span> - </span>  <h5> Chính sách thanh toán </h5>
                            <span> - </span>  <h5> Tủ sách hướng nghiệp </h5>
                            <span> - </span>  <h5> Chủ nghĩa Khắc Kỷ </h5>
                            <span> - </span>  <h5> Hành trang Ngành IT </h5>  
                            <span> - </span>  <h5> Quà tặng cuộc sống </h5>  
                            <span> - </span>  <h5> Sách Người Trong Muôn Nghề: Ngành Sáng tạo và Nghệ thuật có gì? </h5>  
                            

                        </div>
                </div>

                <div className="footer_item">
                        <h3 className='item_header'> thông tin liên hệ </h3>

                        <div className="item_list">
                            <span> - </span> <h5>  Địa chỉ: 87/5 đường 3/2 khu phố 2D - Thị trấn Đạ Tẻh - Huyện Đạ Tẻh - Tỉnh Lâm Đồng </h5>
                            <span> - </span>  <h5> Điện thoại: 0912782832 </h5>
                            <span> - </span>  <h5> Mail: haphanbaominh9674@gmail.com </h5>
                        </div>
                    
                </div>

                <div className="footer_item">
                        <h3 className='item_header'> fanpage </h3>

                </div>
            </div>
        </div>

        </>
    )
}

export default Footer
