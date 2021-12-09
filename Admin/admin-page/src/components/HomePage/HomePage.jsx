import React, {useEffect, useState} from 'react';
import "./Styles.css"
import { BsCreditCardFill } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import Chart from '../Chart/Chart';
import CalendarCom from '../Calendar/Calendar';
import axios from "axios";
import formatCash from '../../function/formatMoney';
import {useSelector, useDispatch} from "react-redux";
import { getOrderListAction } from '../../actions/OrderList';
import { getMonthRevenueAction } from "../../actions/monthRevenue"


const HomePage = () => {
    const [MonthRevenue, setMonthRevenue] = useState([]);
    const [Count, setCount] = useState(0);
    const [curentMonth, setCurentMonth] = useState();

    const dispatch = useDispatch();

    var month = [
        {name: "Jan", Revenue: undefined}, 
        {name: 'Feb', Revenue: undefined},
        {name: 'Mar', Revenue: undefined},
        {name: 'Apr', Revenue: undefined}, 
        {name: 'May', Revenue: undefined}, 
        {name: 'Jun', Revenue: undefined},
        {name: 'Aug', Revenue: undefined}, 
        {name: 'Sep', Revenue: undefined},
        {name: 'Oct', Revenue: undefined},
        {name: 'Nov', Revenue: undefined}, 
        {name: 'Dec', Revenue: undefined}, ]

    const getOrderList = async () => {
        axios.get('http://localhost:5000/api/orderList')
        
        .then(({data}) => { 
            dispatch(getOrderListAction(data));
            return(data)
        })
        .then(data => {
            let count = data.filter(item => item.confirm === 0).length;
            return count
        })

        .then(count => setCount(count))
        .catch(err => {throw err})
    };

    const getMOnthRevenue = async () => {
        axios.get("http://localhost:5000/api/revenue/month")
        
        .then(({data}) =>{
            dispatch(getMonthRevenueAction(data));
            return data   
        })

        .then(data => {
            const cureentMonth = data.filter(month => month.isCurrentMonth === true)[0];
            // setMonthRevenue(data);
            setCurentMonth(cureentMonth.total);
              data.map((item, index) => {
                month[index].Revenue = item.total
            }) 
            return month
            
        })
        
        .then(month => setMonthRevenue(month))
        
    }



 
    useEffect(() => {
        getMOnthRevenue();
        getOrderList();

    }, []);

    return (
        <>
            <div className="Revenue">
                <div className="topSection">

                    <div className="revenueToday">
                        <div className="revenueToday_Icon">
                            <BsCreditCardFill />
                        </div>
                        <div className="revenueToday_content">
                            <h3> Month Revenue </h3>
                            <h2> { curentMonth ? formatCash(curentMonth) : 0 }đ </h2>
                        </div>
                    </div>

                    <div className="revenueToday">
                        <div className="revenueToday_Icon">
                            <BsCartFill />
                        </div>
                        <div className="revenueToday_content">
                            <h3> New Orders </h3>
                            <h2> {Count} </h2>
                        </div>
                    </div>

                </div>

                <div className="revenueMonth">
                            <div className="revenueMonth_Icon">
                                {/* <BsCartFill /> */}
                                <h5> Welcome to spiderrum admin store ! </h5>
                            </div>
                            <div className="revenueMonth_content">
                                <h2>  </h2>
                            </div>
                
                </div>
                

                <div className="Chart">
                    <Chart MonthRevenue={MonthRevenue} />
                </div>

                
                </div>

            <div className="Order">
                <div className="OrderList">
                    <CalendarCom />
                    <div className="pendingOrder">
                        <div className="logo" > 
                            <img src="https://product.hstatic.net/1000405368/product/giaohangtk_c57f4d8ab326411c9a42d9dcde1604f7.png" height="125px" />
                        </div>
                        <div className="pendingOrder_list">
                           
                         
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default HomePage


