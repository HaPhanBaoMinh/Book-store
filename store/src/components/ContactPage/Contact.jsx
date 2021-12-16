import React from 'react'
import "./Styles.css";

const Contact = () => {
    const iframe = {__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7819.283668892679!2d107.4822942188622!3d11.505739720170356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31747715023b50a3%3A0xccb97663194f22db!2zQ2jhu6MgxJDhuqEgVOG6u2g!5e0!3m2!1svi!2s!4v1639229891328!5m2!1svi!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>' }

    return (
        <div className='contact'>
            <div className="contact_map">
            </div>

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
