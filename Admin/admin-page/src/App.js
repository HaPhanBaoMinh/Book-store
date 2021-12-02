import React, {useEffect} from 'react';
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



export const App = () => {

  const dispatch = useDispatch();

  const getOrderList = async () => {
      axios.get('http://localhost:5000/api/orderList')
      .then(({data}) => { 
          dispatch(getOrderListAction(data));
      })
      .catch(err => {throw err})
  };

  const getBookList = async () => {
    axios.get('http://localhost:5000/api/booksList')
    .then(({data}) => { 
        dispatch(getBookListAction(data));
    })
}; 
 
const getPoster = async () => {
  axios.get('http://localhost:5000/api/posterList')
  .then(({data}) => {dispatch(getPosterList(data))} )
  .catch(err => { throw err });
}
   

  useEffect(() => {
      getBookList()
      getOrderList();
      getPoster();
    }, []); 
    

    return (
        <div className="App">
              <Router>
                  <Sidebar />  
                    <div className="HomePage" > 
                      <Routes>
                        <Route path="/" exact element={<HomePage/>} /> 
                        <Route path="/order/shipping" exact element={<Shipping />} />
                        <Route path="/product/update/:bookId" exact element={<UpdateProduct />} />
                        <Route path="/product" exact element={<Product />} />
                        <Route path="/poster" exact element={<Poster />} />
                        <Route path="/newproduct" exact element={<PostProduct />} />
                        <Route path="/order/:id" exact element={<ItemDetail/>} />
                        <Route path="/order" exact element={<OrderPage/>} />
                      </Routes>
                    </div> 
              </Router>
        </div>
    )
}

export default App;
