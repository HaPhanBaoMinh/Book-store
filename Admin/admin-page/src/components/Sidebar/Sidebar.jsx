import React from 'react';
import './Styles.css';
import logo from "../../images/logo.png"
import { BsBox } from "react-icons/bs";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { BsInboxes } from "react-icons/bs";
import { BsClipboardCheck } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BsListCheck } from "react-icons/bs";
import { BsClipboard } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";
import { Link } from 'react-router-dom';
import axios from "axios";

export const Sidebar = () => {

    function getCookie(name) {
        var cookieArr = document.cookie.split(";");
        for(var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            if(name == cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        } 
        return null;
      }

      function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    const logout = async (e) => {
        axios.post('http://localhost:5000/auth/logout', {
            token: getCookie('token')
          })
        .then(res => {
            setCookie('token', '', 1);
            window.location.assign('http://localhost:5000/login-page');
        })
        .catch(rej => console.log("Fail!"))
    }

    return (
        <div className="Sidebar">
            <div className="Sidebar_logo">
                <img src={logo} alt="" />
            </div>

            <div className="Sidebar_content">
                <div className="Sidebar_content-list">
                    <Link to="/admin" className="link" > 
                   <div className="Sidebar_item" component={Link} to='/' >
                       <BsShop className="Siderbar_icon" />
                       <h3> home </h3>
                   </div>
                    </Link> 

                    <div to="/admin/product" className="link hover" > 
                        <div className="Sidebar_item">
                            <BsBox className="Siderbar_icon" />
                            <h3> product </h3>
                        </div>

                        <div className="OpenSideBar" id="item" >
                            <Link to="/admin/product" className="OpenSideBar_item">
                                <BsInboxes className="Siderbar_icon" />
                                <h3> product </h3>
                            </Link>

                            <Link to="/admin/newproduct" className="OpenSideBar_item">
                                <BsClipboardCheck className="Siderbar_icon" />
                                <h3> New Product </h3>
                            </Link>

                            
                       </div>
                   </div>

                   <div className="link hover"  >

                        <div className="Sidebar_item">
                            <BsReverseLayoutTextSidebarReverse className="Siderbar_icon " />
                            <h3> order </h3>
                                
                        </div>

                       <div className="OpenSideBar" id="item" >
                            <Link to="/admin/order" className="OpenSideBar_item">
                                <BsListCheck className="Siderbar_icon" />
                                <h3> Order List </h3>
                            </Link>

                            <Link to="/admin/order/shipping" className="OpenSideBar_item">
                                <BsTruck className="Siderbar_icon" />
                                <h3> Shipping </h3>
                            </Link>

                            
                       </div>
                   </div>

                   <Link className="link" to="/admin/poster" > 
                        <div className="Sidebar_item">
                            <BsClipboard className="Siderbar_icon" />
                            <h3> poster </h3>
                        </div>
                    </Link>

                   <Link className="link" to="/admin" > 
                        <div className="Sidebar_item">
                            <BsTelephone className="Siderbar_icon" />
                            <h3> support </h3>
                        </div>
                    </Link>
                    

                        <div className="Sidebar_item hightLigh" onClick={() => logout() } >
                            <BsToggleOff className="Siderbar_icon" />
                            <h3> log out </h3>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar;