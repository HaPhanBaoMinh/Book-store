import React, {useEffect, useRef, useState} from 'react';
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
import { getPosterList } from './actions/posterListActions';

const App = () => {
    const dispath = useDispatch();
    const [ isLoading, setIsLoading ] = useState(false);
    const componentMounted = useRef(true)

    const getBooks = async () => {
        axios.get("http://localhost:5000/store/bookList")
        .then(({data}) => {
            setIsLoading(true);
            dispath(getBookList(data))
            return data
        })
        .then(data => {
            setIsLoading(false)
        }) 
    }

    const getPosters = async () => {
        axios.get("http://localhost:5000/api/posterList")
        .then(({data}) => {
            setIsLoading(true);
            dispath(getPosterList(data))
            return data
        })
        .then(data => {
            setIsLoading(false)
        })
    }

    useEffect(() => {
        if(componentMounted.current) {
            getBooks();
            getPosters();
        }
        return function cleanup() {
            componentMounted.current = false; 
        }
    }, [])

    return (
        <>
               {
                   isLoading ? <div> loading . . . </div> : (
                        <Router >
                            <Topbar />
                            <div className="app">
                                    <Routes>
                                        <Route path="/" element={ <HomePage /> } />
                                        <Route path="/contact" element={ <Contact /> } />
                                        <Route path="/booklist" element={ <BookList /> } />
                                        <Route path="/cart" element={ <Cart /> } />
                                        <Route path="/checkout" element={ <Checkout /> } />
                                    </Routes>
                            </div>
                            <Footer />
                        </Router>
                    )
               }
        </>
    )
}

export default App
