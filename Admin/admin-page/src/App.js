import React, {useEffect, useState} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import OrderPage from './components/OrderPage/OrderPage';
import Shipping from './components/OrderPage/ShippingPage/Shipping';
import Product from './components/Product/Product';
import { Poster } from './components/Poster/Poster';
import { PostProduct } from './components/Product/PostProduct/PostProduct';
import {UpdateProduct}  from './components/Product/UpdateProduct/UpdateProduct';
import ItemDetail from './components/OrderPage/Table/ItemDetail/ItemDetail';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getOrderListAction } from './actions/OrderList';
import { getBookListAction } from './actions/BookList';
import { getPosterList } from './actions/PosterList';
import LoginPage from './components/LoginPage/LoginPage';
import ErrorrRoute from './components/LoginPage/404/ErrorrRoute';
import "./App.css"
import cron from "react-js-cron";


export const App = () => {
  const dispatch = useDispatch();

  const getOrderList = async () => {
      axios.get('http://localhost:5000/api/orderList')
     .then(({data}) => { 
           dispatch(getOrderListAction(data)) 
      })
      .catch(err => {throw err})
  };

  const getBookList = async () => {
    axios.get('http://localhost:5000/api/booksList')
    .then(res => {
        const resj = res ? res : {data: []}
        return resj
    } )
    .then(({data}) => { 
        dispatch(getBookListAction(data));
    })
    .then(() => {

    })
}; 
 
const getPoster = async () => {
  axios.get('http://localhost:5000/api/posterList')
 .then(({data}) => {
    dispatch(getPosterList(data))
  } )
  .catch(err => { throw err });
}

  const accountToken = useSelector(state => state.accountToken).data;

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  const refreshToken = async () => {
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
    console.log('refresh Token');
    axios.post('http://localhost:5000/auth/token', {
      refreshToken: refreshToken
    }).then(newToken => {
      setCookie('token', JSON.stringify(newToken.data.tokens), 1)
    })
    .catch(err => console.log(err))
  }

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

  useEffect(() => {
      getBookList()
      getOrderList();
      getPoster();
    }, []); 

    useEffect(() => {

        let interval =  setInterval(()=> {
          refreshToken();
        }, 50000)

        return ()=> clearInterval(interval)
    }, [])


    return (
        <div className="App">
              <Router>
                <div className="HomePage" > 
                        <Sidebar/>          
                          <div className="HomePage_Content" >
                            <Routes>
                                <Route path="/admin" exact element={<HomePage />} /> 
                                <Route path="/admin/order/shipping" exact element={<Shipping />} />
                                <Route path="/admin/product/update/:bookId" exact element={<UpdateProduct />} />
                                <Route path="/admin/product" exact element={<Product />} />
                                <Route path="/admin/poster" exact element={<Poster />} />
                                <Route path="/admin/newproduct" exact element={<PostProduct />} />
                                <Route path="/admin/order/:id" exact element={<ItemDetail/>} />
                                <Route path="/admin/order" exact element={<OrderPage/>} />
                            </Routes>
                          </div>
                  </div> 
                    
              </Router>

        </div>
    )
}

export default App;
