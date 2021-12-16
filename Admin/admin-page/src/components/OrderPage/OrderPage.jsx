import React, {} from 'react';
import "./Styles.css"
import { BsSearch } from "react-icons/bs";
import {useSelector } from 'react-redux';
import Table from './Table/Table';


  
export const OrderPage = () => {
    const orderList = useSelector(state => state.orderList);

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
