import React from 'react';
import "./Styles.css";
import { Link } from 'react-router-dom';
import formatCash from '../../../function/formatMoney';
import { deleteBook } from '../../../actions/BookList'; 
import {useDispatch} from "react-redux";
import axios from 'axios';

export const Item = ({book, count}) => {
    const dispatch = useDispatch();

    const onClickDeleteBook = (e) => {
        dispatch(deleteBook(book._id));

        for( let i = 0; i < book.bookImages.length; i++ ){
            axios.delete(`http://localhost:5000/api/file/${book.bookImages[i].id}`)
            // console.log(`http://localhost:5000/api/file/${book.bookImages[i].id}`);
        }

        axios.delete('http://localhost:5000/api/booksList', { data: {
            id: book._id,
            // img_id: book.bookImages[0].id
        }, header: {} });
    } 


 

    return (
        <tr className="tr">
                 <Link to={`/product/update/${book.bookId}`} className='linkItem' >
                    <td className="td" >{count} </td>
                    <td className="td " >
                            <img src={`http://localhost:5000/api/image/${book.bookImages[0].filename}`} height="110px" alt="" />
                       
                    </td>
                    <td className="td book-name" > {book.bookName} </td>
                    <td className="td" > {book.bookId} </td>
                    <td className="td" > {formatCash(book.bookPrice.newPrice)}đ</td>
                    <td className="td" > <p> {book.bookQuantity} </p> </td>

                    </Link>
                    <td className="td" >
                            <button className="button cancel" onClick={() => onClickDeleteBook()} >Delete</button>
                    </td>
        </tr>
    )
}
