import React from 'react'
import Item from "../../HomePage/BookBlock/Item/Item";
import "./Styles.css"

const BookGrid = ({bookList}) => {
    return (
        <>
            <div className="sort">
                <h3 className='book-grid_header' > Tủ sách hướng nghiệp </h3>
                <select>
                <option value="new"> Mới nhất </option> 
                <option value="low-to-hight"> Giá: Tăng dần </option>
                <option value="hight-to-low"> Giá: Giảm dần </option>
                <option value="az"> Tên: A - Z </option>
                </select>
            </div>
            <section className="book-grid">
                        {
                            bookList ? bookList.map(book => (
                                <Item book={book} />
                            )) : <> </>
                        }
                
            </section>
        </>
    )
}

export default BookGrid
