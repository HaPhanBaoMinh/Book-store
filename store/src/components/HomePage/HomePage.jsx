import React, {useEffect, useState} from 'react';
import "./Styles.css";
import Poster from './Poster/Poster';
import BookBlock from './BookBlock/BookBlock';
import {useSelector, useDispatch} from "react-redux";
import { getBookList } from '../../actions/bookLietActions';
import axios from 'axios';

const HomePage = () => {
    const dispath = useDispatch();
    const [bookList, setbookList] = useState([]);
    const [bookList2, setbookList2] = useState([]);
    const [bookList3, setbookList3] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    const getBooks = async () => {
        axios.get("http://localhost:5000/store/bookList")
        .then(({data}) => {
            dispath(getBookList(data));
            setIsLoading(true)
            return data
        })
        .then(data => {
            setbookList(data);
            setbookList2(data.filter(book => book.booktags[0] == 'huong nghiep')  )
            setbookList3(data.filter(book => book.booktags[1] == 'IT')  )
            setIsLoading(false)
        })
    }
    useEffect(() => {
        getBooks();
    }, [])

    console.log(bookList2)


    return (
        <div className='home-page'>
            <Poster />
            
            {!isLoading ? <BookBlock key='list1' blockHeader='sản phẩm' bookList={bookList} /> : <div>Loading</div>}
            {!isLoading ? <BookBlock key='list2' blockHeader='tủ sách hướng nghiệp' bookList={bookList2} /> : <div>Loading</div>}
            {!isLoading ? <BookBlock key='list3' blockHeader='hành trang ngành it' bookList={bookList3} /> : <div>Loading</div>}
            {/* <BookBlock key='list3' blockHeader='hành trang ngành it' /> */}

            
        </div>
    )
} 

export default HomePage
