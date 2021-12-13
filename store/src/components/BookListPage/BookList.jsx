import React,{useState, useEffect} from 'react';
import "./Styles.css";
import BookGrid from './BookGrid/BookGrid';
import { useDispatch } from 'react-redux';
import  axios  from 'axios';
import { getBookList } from '../../actions/bookLietActions';

const BookList = () => {
    const dispath = useDispatch();
    const [bookList, setbookList] = useState([]);
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
            setIsLoading(false)
        })
    }
    useEffect(() => {
        getBooks();
    }, [])


    return (
        <div className='book-list'>
            <div className="list-side-bar">

                <h3> Bộ lọc </h3>

                <div className="filter_content">
                    <div className="by_booktype">
                        <h4> Tủ sách - </h4>
                        <ul>
                            <li> <a href="/"> Tủ sách IT </a> </li>
                            <li> <a href="/"> Tủ sách hướng nghiệp </a> </li>
                            <li> <a href="/"> Chủ đề khác </a> </li>
                        </ul> 

                    </div>

                    <div className="by_price">
                        <h4> Giá sản phẩm - </h4>
                        <ul>
                            <li> <input type="checkbox" id='0'/> <label htmlFor="0"> Dưới 100,000đ </label> </li>
                            <li> <input type="checkbox" id='1'  /> <label htmlFor="1">100,000đ - 200,000đ </label> </li>
                            <li> <input type="checkbox" id='2' /> <label htmlFor="2"> 200,000đ - 300,000đ</label> </li>
                            <li> <input type="checkbox" id='3' /> <label htmlFor="3"> 300,000đ - 400,000đ</label> </li>
                            <li> <input type="checkbox" id='4' /> <label htmlFor="4"> Trên 400,000đ </label> </li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="list-content">
                <BookGrid bookList={bookList}/>
               
            </div>
        </div>
    )
}

export default BookList
