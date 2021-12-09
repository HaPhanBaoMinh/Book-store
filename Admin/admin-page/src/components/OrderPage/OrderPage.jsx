import React, {useEffect} from 'react';
import "./Styles.css"
import { BsSearch } from "react-icons/bs";
import {useSelector, useDispatch } from 'react-redux';
import Table from './Table/Table';
import axios from 'axios';
import {getOrderListAction} from "../../actions/OrderList.js"


 
export const OrderPage = () => {
    const dispatch = useDispatch();
    const orderList = useSelector(state => state.orderList);

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem('refreshToken');
        axios.post('http://localhost:5000/auth/token', {
          refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzg4OTQ4NTgsImV4cCI6MTYzODg5ODQ1OH0.OmB0fiYIPMRX7DSFZwxa--QMRquNdU_eXnoEh9Akz24'
        }).then(newToken => {
            console.log(newToken);
          setCookie('token', newToken.data.tokens, 1)
        }).catch(err => console.log(err))
      }

      refreshToken();

    return (
        <>
            <div className="oderList">
                <div className="searchBar">
                    <input type="text" placeholder="Find by name" />
                    <BsSearch className="icon" />
                </div>
                <div className="choceTable">
                    <div className="link-item" > 
                            <h3> Orders list </h3>
                    </div> 

                </div>
                        <Table check= {true} orderList= {orderList} /> 
               
            </div>
        </>
    )
}

export default OrderPage
