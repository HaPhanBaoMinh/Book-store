import React from 'react';
import "./App.css";
import Topbar from './components/TopBar/Topbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Contact from './components/ContactPage/Contact';
import BookList from './components/BookListPage/BookList';
import Cart from './components/CartPage/Cart';
import Footer from './components/Footer/Footer';


const App = () => {
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
                            </Routes>
                    </div>
                    <Footer />
                </Router>
        </>
    )
}

export default App
