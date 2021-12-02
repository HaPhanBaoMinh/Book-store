import React, {useEffect} from 'react';
import { Item } from './Item';
import "./Styles.css";
import {useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getBookListAction } from '../../../actions/BookList';


export const Table = () => {
    const dispatch = useDispatch();

    

    const bookList = useSelector(state => state.bookList);

    return ( 
        
        <table className="table-list">
            <thead>
                <th className="header">#</th>
                <th className="header">Image</th>
                <th className="header">Book's name</th>
                <th className="header">Book ID</th>
                <th className="header">Last price</th>
                <th className="header">Quantity</th>
                <th className="header"></th>
                
            </thead>

            <tbody>
            
            {bookList.map((book, index) =>  <Item book={book} count={index+1} key={book._id} /> ) }
           
            </tbody>
        </table>
    )
}

export default Table;
