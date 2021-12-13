import React, {useEffect} from 'react';
import "./App.css";
import Topbar from './components/TopBar/Topbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Contact from './components/ContactPage/Contact';
import BookList from './components/BookListPage/BookList';
import Cart from './components/CartPage/Cart';
import Footer from './components/Footer/Footer';
import Checkout from './components/CheckoutPage/Checkout';
import { useDispatch } from 'react-redux';
import { getBookList } from './actions/bookLietActions';
import axios from 'axios';




const App = () => {
    const dispath = useDispatch();

    const getBooks = async () => {
        axios.get("http://localhost:5000/store/bookList")
        .then(({data}) => {
            dispath(getBookList(data))
        })
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <>
                <Router >
                    <Topbar />
                    <div className='app'>
                            <Routes>
                                <Route path="/" element={ <HomePage /> } />
                                <Route path="/contact" element={ <Contact /> } />
                                <Route path="/booklist" element={ <BookList /> } />
                                <Route path="/cart" element={ <Cart /> } />
                                <Route path="/  " element={ <Checkout /> } />
                            </Routes>
                    </div>
                    <Footer />
                </Router>
        </>
    )
}

export default App
