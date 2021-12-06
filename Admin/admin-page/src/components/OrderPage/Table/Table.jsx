import React, {useState} from 'react';
import  Item  from './Item';
import "./Styles.css"
import { useSelector } from 'react-redux';

export const Table = () => {
    const orderList = useSelector(state => state.orderList);
    


    return (
        
        <table className="table-list">
            <thead>
                <th className="header">#</th>
                <th className="header">Order Date</th>
                <th className="header">Custemer</th>
                <th className="header">Phone Number</th>
                <th className="header">Items</th>
                {/* <th className="header">Total</th> */}
                <th className="header check">Check</th> 
                
            </thead>

            <tbody>
              
                {orderList.map((orderListItem, index) => <Item  orderListItem={orderListItem} count={index+1} key={index} /> )}
                
            </tbody>
        </table>
    )
}

export default Table;
