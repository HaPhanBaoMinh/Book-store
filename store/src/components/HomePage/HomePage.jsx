import React, {} from 'react';
import "./Styles.css";
import Poster from './Poster/Poster';
import BookBlock from './BookBlock/BookBlock';
import {useSelector} from "react-redux";

const HomePage = () => {
    const bookList = useSelector(state => state.bookList);
    const bookList2 = useSelector(state => state.bookList.filter(book => book.booktags[0] === 'huong nghiep'));
    const bookList3 = useSelector(state => state.bookList.filter(book => book.booktags[1] === 'IT'));

    return (
        <div className='home-page'>
            <Poster />
        
            <BookBlock key='list1' blockHeader='tủ sách chung' bookList={bookList} /> 
            <BookBlock key='list2' blockHeader='tủ sách hướng nghiệp' bookList={bookList2} /> 
            <BookBlock key='list3' blockHeader='tủ sách ngành it' bookList={bookList3} /> 
            
        </div>
    )
} 

export default HomePage
