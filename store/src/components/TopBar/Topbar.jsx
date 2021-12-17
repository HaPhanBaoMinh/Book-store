import React, {useState} from 'react';
import "./Styles.css";
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Topbar = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const changePage = (num) => {
        setCurrentPage(num);
    }

    

    const cartList = useSelector(state => state.cartList);

   

    return (
        <div className='Top-bar'  >
            
            <div className="Top-bar_logo">
                <div className="logo">
                    <img src="https://file.hstatic.net/200000123069/file/210316_spiderum-logo-18_de9a9e5e451043cda7b7fc7d29a1520c.png" alt="" />
                </div>
            </div>


            <div className="Top-bar_navbar">
                <div className="navbar">
                    <Link className='link' to='/book-store/home' > 
                        <div className="navbar_Item" style={ currentPage === 1 ? { borderBottom: '2px solid' } : { borderBottom: 'none' }} 
                        onClick={() => changePage(1)}
                        >
                            <h3> Trang chủ </h3>
                        </div>
                    </Link>

                    <Link className='link' to='/book-store/booklist' >
                        <div className="navbar_Item" style={ currentPage === 2 ? { borderBottom: '2px solid' } : { borderBottom: 'none' }}
                        onClick={() => changePage(2)}
                        >
                            <h3> Tủ sách </h3>
                        </div>
                    </Link>

                    <Link className='link' to='/book-store/contact' > 
                        <div className="navbar_Item" style={ currentPage === 3 ? { borderBottom: '2px solid' } : { borderBottom: 'none' }} 
                        onClick={() => changePage(3)}
                        >
                            <h3> Liên hệ </h3>
                        </div>
                    </Link>

                </div>
            </div>
            <Link to="/book-store/cart" className='link'> 
                <div className="Top-bar_cart">
                    <div className="cart_logo">
                        <BsCart2 className='logo' />
                        <h6>  {cartList.length}  </h6>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Topbar
