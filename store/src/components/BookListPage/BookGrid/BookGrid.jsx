import React from 'react'
import Item from "../../HomePage/BookBlock/Item/Item";
import "./Styles.css"

const BookGrid = ({bookList, header}) => {
    return (
        <>
            <div className="sort">
                <h3 className='book-grid_header' > {header} </h3>
                
            </div>
            <section className="book-grid">
                        {
                            bookList ? bookList.map((book) => (
                                <Item book={book} key={book._id} />
                            )) : <> </>
                        }
                
            </section>
        </>
    )
}

export default BookGrid
