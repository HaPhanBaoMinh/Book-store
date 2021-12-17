import React from 'react';
import Item from './Item/Item';
import { Carousel } from '@trendyol-js/react-carousel';
import "./Styles.css";
import Button from './Item/Button';


const BookBlock = ( {header, bookList} ) => { 
    // console.log(bookList);
    return (
        <> 
            <div className="block-header">
                <h2> {header} </h2>
            </div>
            <div className='book-block' >
                <Carousel show={4} slide={1} swiping={true} rightArrow={ <Button check={1} /> } leftArrow={<Button check={0} />} responsive={true} >
                        {
                            bookList ? bookList.map((book) => (
                                <Item book={book} key={book._id} />
                            )) : <> </>
                        }
                
                </Carousel>
            </div>
            <div className="line"></div>
        </> 
    )
}

export default React.memo(BookBlock)
