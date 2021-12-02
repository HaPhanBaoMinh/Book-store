import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import formatCash from '../../../../function/formatMoney';
import RowItem from './RowItem';
import "./Styles.css";

const ItemDetail = () => {
    const {id} = useParams();
    const orderItem = useSelector(state => state.orderList.find(order => order._id === id));
    const bookList = useSelector((state) => state.bookList);
    const [sumTotal, setsumTotal] = useState(0);

    const checkPrice = (bookList) => {
        const {bookId, bookPrice} = bookList;
        return {bookId, bookPrice}
    }
    
    const ProductList = bookList.map(item => checkPrice(item));

   const updateSumTotal = (total) => {
        setsumTotal(pre => pre + total);
   }

    return (
        <div className="OrderItem" >
            
        {orderItem ? (
            <>
                   <div className="OrderItem_Info">
                <div className="Info_Order">
                    <div className="Info_Order_content">
                        <h2> Customer </h2>
                        
                        <div className="Info_Order_Cus">
                            <h3> <span> Name: </span> {orderItem.contactInfo.customerName} </h3>
                            <h3> <span> Email: </span> {orderItem.contactInfo.email} </h3>
                            <h3> <span> Phone: </span> {orderItem.contactInfo.phoneNumber} </h3>

                        </div>
                    </div>

                    <div className="Info_Order_content">
                        <h2> Shipping Address </h2>
                        
                        <div className="Info_Order_Cus">
                            <h3> <span> Province/City: </span> {orderItem.contactInfo.address.province} </h3>
                            <h3> <span> District:</span>  {orderItem.contactInfo.address.district} </h3>
                            <h3> <span> Town: </span> {orderItem.contactInfo.address.town}  </h3>
                            <h3> <span> Detailed: </span> {orderItem.contactInfo.address.detailedAddress}  </h3>

                        </div>
                    </div>

                    <div className="Info_Order_content">
                        <h2> Order Info </h2>
                        
                        <div className="Info_Order_Cus">
                            <h3> <span> Order Date: </span> {`${orderItem.orderDate.date}/${orderItem.orderDate.month}/${orderItem.orderDate.year}`} </h3>
                            <h3> <span> Status:</span>  <p> {orderItem.confirm === 1 ? 'CONFIRM' : orderItem.confirm === -1 ? "CANCEL" : 'PENDING'  }  </p> </h3>
                            <h3> <span> OrderId: </span> {orderItem._id} </h3>
                        </div>
                    </div>

                </div>

                
               
            </div>

            <div className="OrderItem_Product">
                <div className="Product_List">
                <table className="table-list">
            <thead>
                <th className="header">#</th>
                <th className="header">Product</th>
                <th className="header">Price</th>
                <th className="header">Quantity</th>
                <th className="header">Total</th>
                
            </thead>

            <tbody>
                
               {orderItem.cart.map((cartItem, index) =>  <RowItem updateSumTotal={updateSumTotal} cartItem={cartItem} index={index} key={cartItem._id} ProductList={ProductList} /> )}
           
            </tbody>
        </table>
                </div>
                <div className="Product_Total">

                </div>
            </div>
            </>
        ) : <> </> }

            <h3> {sumTotal} </h3>

        </div>
    )
}

export default ItemDetail