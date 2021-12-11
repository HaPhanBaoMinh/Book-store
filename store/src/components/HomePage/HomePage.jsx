import React, {useState} from 'react';
import "./Styles.css";
import Poster from './Poster/Poster';
import BookBlock from './BookBlock/BookBlock';

const HomePage = () => {
    const onScroll = () => {
        const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
        console.log(`onScroll, window.scrollY: ${scrollY}  `)
      }

    return (
        <div className='home-page'>
            <Poster />
            
            <BookBlock blockHeader='sản phẩm nổi bật' />
            <BookBlock blockHeader='tủ sách hướng nghiệp' />
            <BookBlock blockHeader='hành trang ngành it' />

            
        </div>
    )
}

export default HomePage
