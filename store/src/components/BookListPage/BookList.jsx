import React, { useState} from 'react';
import "./Styles.css";
import BookGrid from './BookGrid/BookGrid';
import {  useSelector } from 'react-redux';

let filterArray = [];

const BookList = () => {
    const bookList1 = useSelector(state => state.bookList);
    const bookList2 = useSelector(state => state.bookList.filter(book => book.booktags[0] === 'huong nghiep'));
    const bookList3 = useSelector(state => state.bookList.filter(book => book.booktags[1] === 'IT'));
    const bookList4 = useSelector(state => state.bookList.filter(book => book.booktags[1] !== 'IT' &&  book.booktags[0] !== 'huong nghiep'));
    
    const [bookList, setbookList] = useState(bookList1);
    const [filterList, setfilterList] = useState([]);
    const [header, setheader] = useState(' Tủ sách chung ');
    const [isCheck, setIsCheck] = useState(false)
    
    const changeBookList = (e, bookList, listName) => { 
        e.preventDefault();
        setbookList(bookList);
        setheader(listName)
   }

//    console.log(bookList1)

   const onFilter = ( min, max, e) => {
       if(e.target.checked){
           const newBookList = bookList.filter(book => book.bookPrice.newPrice >= min && book.bookPrice.newPrice <= max );
           filterArray = [...filterArray, ...newBookList]
           setfilterList(filterArray);

                if(filterList.length === 0 && newBookList.length === 0){
                    console.log('NON')
                }
                setIsCheck(true)
        }  

        
        
        if(!e.target.checked){
            filterArray = filterList.filter(book => book.bookPrice.newPrice > max  || book.bookPrice.newPrice < min );
            setfilterList(filterArray);
            setIsCheck(false)
        }

        
    }

    return (
        <div className='book-list'>
            <div className="list-side-bar">

                <h3> Bộ lọc </h3>

                <div className="filter_content">
                    <div className="by_booktype">
                        <h4> Tủ sách - </h4>
                        <ul>
                            <li onClick={(e) => changeBookList(e, bookList1, "Tủ sách chung" ) } > Tủ sách chung  </li>
                            <li  onClick={(e) => changeBookList(e, bookList3, "Tủ sách ngành IT" ) }> Tủ sách IT  </li>
                            <li onClick={(e) => changeBookList(e, bookList2, "Tủ sách hướng nghiệp" ) } >  Tủ sách hướng nghiệp  </li>
                            <li onClick={(e) => changeBookList(e, bookList4, "Chủ đề khác" ) }  >  Chủ đề khác  </li>
                        </ul> 

                    </div>

                    <div className="by_price">
                        <h4> Giá sản phẩm - </h4>
                        <ul>
                            <li> <input type="checkbox" id='0' onChange={(e) => onFilter(0, 100000,e)} /> <label htmlFor="0"> Dưới 100,000đ </label> </li>
                            <li> <input type="checkbox" id='1' onChange={(e) => onFilter(100000, 200000, e)} /> <label htmlFor="1">100,000đ - 200,000đ </label> </li>
                            <li> <input type="checkbox" id='2' onChange={(e) => onFilter(200000, 300000,e)} /> <label htmlFor="2"> 200,000đ - 300,000đ</label> </li>
                            <li> <input type="checkbox" id='3' onChange={(e) => onFilter(300000, 400000,e)} /> <label htmlFor="3"> 300,000đ - 400,000đ</label> </li>
                            <li> <input type="checkbox" id='4' onChange={(e) => onFilter(400000, 9999990,e)} /> <label htmlFor="4"> Trên 400,000đ </label> </li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="list-content">
               { filterList.length > 0 || isCheck === true ? <BookGrid bookList={filterList} header={header} /> : <BookGrid bookList={bookList} header={header} />}
            </div>
        </div>
    )
}

export default BookList
