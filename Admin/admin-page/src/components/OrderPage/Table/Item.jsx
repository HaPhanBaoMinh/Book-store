import React, {useState} from 'react';
import {useDispatch } from 'react-redux';
import "./Styles.css";
import axios from "axios";
import {confirmOrderItemAction, cancelOrderItemAction} from '../../../actions/OrderList';
import formatCash from "../../../function/formatMoney"
import { Link } from 'react-router-dom';

const Item = ({orderListItem, count}) => {
    const dispatch = useDispatch();

 
    const handleConfirmOnClick = () => {
        dispatch(confirmOrderItemAction(orderListItem));
        axios.get(`http://localhost:5000/api/orderList/comfirm/${orderListItem._id}`);
    }
    
    const handleCancelOnClick = () => {
        dispatch(cancelOrderItemAction(orderListItem)); 
        axios.get(`http://localhost:5000/api/orderList/cancel/${orderListItem._id}`);

    }
 
    const background = orderListItem.confirm === 0 ? '' : orderListItem.confirm === 1 ? '#98fa98de' : orderListItem.confirm === -1 ? '#ff7878e0' : ''
    // console.log(background);

    return (
        <>
            <tr className="tr" style={{ backgroundColor: background }}  >
                <Link to={`/order/${orderListItem._id}`} className="orderItem" > 
                    <td className="td" >{count} </td>
                    <td className="td" > {orderListItem.orderDate.date} /{orderListItem.orderDate.month}/{orderListItem.orderDate.year}</td>
                    <td className="td" > {orderListItem.contactInfo.customerName} </td>
                    <td className="td" > {orderListItem.contactInfo.phoneNumber} </td>
                    <td className="td" > {orderListItem.cart.length} </td>
                    <td className="td" > { orderListItem.total ? formatCash(orderListItem.total) : 0} đ </td>
 
                    {
                        orderListItem.confirm === 0  ?
                        <td className="td" >
                            <button className="button confirm" onClick={() => handleConfirmOnClick()} >Confirm</button>
                            <button className="button cancel" onClick={() => handleCancelOnClick()} >Cancel</button>
                        </td> : <td className="td"> {orderListItem.confirm === 0 ? '' : orderListItem.confirm === 1 ? 'CONFIRM' : orderListItem.confirm === -1 ? 'CANCEL' : ''} </td>
                    }

                    
                </Link> 
                </tr>
        </>
    )
}

export default React.memo(Item) 