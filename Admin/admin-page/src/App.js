import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import OrderPage from './components/OrderPage/OrderPage';
import Shipping from './components/OrderPage/ShippingPage/Shipping';
import Product from './components/Product/Product';
import { Poster } from './components/Poster/Poster';
import { PostProduct } from './components/Product/PostProduct/PostProduct';
import {UpdateProduct}  from './components/Product/UpdateProduct/UpdateProduct';


export const App = () => {


    return (
        <div className="App">
              <Router>
                  <Sidebar />  
                    <div className="HomePage" > 
                      <Routes>
                        <Route path="/" exact element={<HomePage/>} />
                        <Route path="/order" exact element={<OrderPage/>} />
                        <Route path="/order/shipping" exact element={<Shipping />} />
                        <Route path="/product/update/:bookId" exact element={<UpdateProduct />} />
                        <Route path="/product" exact element={<Product />} />
                        <Route path="/poster" exact element={<Poster />} />
                        <Route path="/newproduct" exact element={<PostProduct />} />
                      </Routes>
                    </div> 
              </Router>
        </div>
    )
}

export default App;
