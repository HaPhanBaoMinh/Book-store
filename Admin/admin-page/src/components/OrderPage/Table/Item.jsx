import React, {useState} from 'react';
import {useDispatch } from 'react-redux';
import "./Styles.css";
import axios from "axios";
import {confirmOrderItemAction, cancelOrderItemAction} from '../../../actions/OrderList'

export const Item = ({check, status, orderListItem, count}) => {
    // const [Background, setBackground] = useState('')
    const dispatch = useDispatch();

    

    const handleConfirmOnClick = () => {
        dispatch(confirmOrderItemAction(orderListItem));
        axios.get(`http://localhost:5000/api/orderList/comfirm/${orderListItem._id}`);
    }
    
    const handleCancelOnClick = () => {
        dispatch(cancelOrderItemAction(orderListItem));
    }
 
    const background = orderListItem.confirm === 0 ? '' : orderListItem.confirm === 1 ? '#98fa98de' : orderListItem.confirm === -1 ? '#ff7878e0' : ''
    console.log(background);

    return (
        <>
            <tr className="tr" style={{ backgroundColor: background }}  >
                    <td className="td" >{count} </td>
                    <td className="td" > {orderListItem.orderDate.date} /{orderListItem.orderDate.month}/{orderListItem.orderDate.year}</td>
                    <td className="td" > {orderListItem.contactInfo.customerName} </td>
                    <td className="td" > {orderListItem.contactInfo.phoneNumber} </td>
                    <td className="td" > {orderListItem.cart.length} </td>
                    <td className="td" > {orderListItem.total} </td>
 
                    {
                        check == true && orderListItem.confirm === 0  ?
                        <td className="td" >
                            <button className="button confirm" onClick={() => handleConfirmOnClick()} >Confirm</button>
                            <button className="button cancel" onClick={() => handleCancelOnClick()} >Cancel</button>
                        </td> : <td className="td"> {orderListItem.confirm === 0 ? '' : orderListItem.confirm === 1 ? 'CONFIRM' : orderListItem.confirm === -1 ? 'CANCEL' : ''} </td>
                    }

                    {
                        status == true ?
                        <td className="td">
                           <h2> Pending </h2>
                        </td> :  <>  </>

                    }
                    
                </tr>
        </>
    )
}
