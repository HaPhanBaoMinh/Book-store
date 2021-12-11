import React from 'react';
import Item from './Item/Item';
import { Carousel } from '@trendyol-js/react-carousel';
import "./Styles.css";
import Button from './Item/Button';


const BookBlock = ( {blockHeader} ) => {
    
    return (
        <>
            <div className="block-header">
                <h2> {blockHeader} </h2>
            </div>
            <div className='book-block' >
                <Carousel show={4} slide={1} swiping={true} rightArrow={ <Button check={1} /> } leftArrow={<Button check={0} />} >
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </Carousel>
            </div>
            <div className="line"></div>
        </>
    )
}

export default BookBlock
