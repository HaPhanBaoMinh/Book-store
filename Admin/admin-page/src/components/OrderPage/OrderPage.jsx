import React, {useEffect} from 'react';
import "./Styles.css"
import { BsSearch } from "react-icons/bs";
import {useSelector, useDispatch } from 'react-redux';
import Table from './Table/Table';
import axios from 'axios';
import {getOrderListAction} from "../../actions/OrderList.js"



export const OrderPage = () => {
    const dispatch = useDispatch();

    const getOrderList = async () => {
        axios.get('http://localhost:5000/api/orderList')
        .then(({data}) => { 
            dispatch(getOrderListAction(data));
        })
    };
 
    useEffect(() => {
        getOrderList();
    }, []);
    // GetBookList(); 
    const orderList = useSelector(state => state.orderList);
    console.log(orderList);

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
                        <Table check= {true} orderList={orderList} /> 
               
            </div>
        </>
    )
}

export default OrderPage
