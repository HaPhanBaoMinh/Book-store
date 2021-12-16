import React from 'react';
import { useSelector } from 'react-redux';
import { Zoom  } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const images = [
  {
    url: 'https://file.hstatic.net/200000123069/file/spiderum-store-banner_57a17c456b49418784aea1dce097df8e.jpg',
    link: '/Slide1'
  },
  {
    url: 'https://file.hstatic.net/200000123069/file/seneca-banner-shop-spiderum_7250b3e14e1a4c53a949902a0eb3a1cd.jpg',
    link: '/Slide2'
  },
  {
    url: 'https://file.hstatic.net/200000123069/file/spiderumxssstutte03r_e5efa3dcf2094a54b1495d0ad42520ee.jpg',
    link: '/Slide3'
  },
]; 

const Slide = () => {

  const posterList = useSelector(state => state.posterList);


    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
              posterList.map((each, index) => (
                <a href={each.linkTo} className='poster-link' >
                  <img key={index} style={{width: "100%"}} src={`http://localhost:5000/api/image/${each.bookImages.filename}`} /> 
                </a>
              ))
          }
        </Zoom>
      </div>
    )
}
export default Slide