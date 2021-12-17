import React from 'react'
import "./Styles.css";

const Contact = () => {
    return (
        <div className='contact'>
           

            <div className="contact_add">
                <h3> Liên hệ </h3>

                <div className="info">
                    <h4> Email chúng tôi: </h4>
                    <h4> <b>  Haphanbaominh9674@gmail.com  </b></h4>
                </div>

                
                <div className="info">
                    <h4> Điện thoại: </h4>
                    <h4> <b> 0912782832 </b> </h4>
                </div>

                
                <div className="info">
                    <h4> Thời gian làm việc: </h4>
                    <h4> <b> Thứ 2 đến Thứ 6 từ 8h đến 18h; Thứ 7 và Chủ nhật từ 8h00 đến 17h00 </b> </h4>
                </div>
            </div>
        </div>
    )
}

export default Contact
