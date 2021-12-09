import React from 'react';
import "./App.css";
import Topbar from './TopBar/Topbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Contact from './Contact/Contact';
import BookList from './BookList/BookList';
import Cart from './Cart/Cart';


const App = () => {
    return (
        <>
                <Router>
                    <Topbar currentPage={1} />
                    <div className='app' >
                            <Routes>
                                <Route path="/" element={ <HomePage /> } />
                                <Route path="/contact" element={ <Contact /> } />
                                <Route path="/booklist" element={ <BookList /> } />
                                <Route path="/cart" element={ <Cart /> } />
                            </Routes>
                    </div>
                </Router>
        </>
    )
}

export default App
