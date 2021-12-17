import React from 'react';
import { useSelector } from 'react-redux';
import { Zoom  } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const Slide = () => {

  const posterList = useSelector(state => state.posterList);


    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
              posterList.map((each) => (
                <a href={each.linkTo} className='poster-link' key={each.bookImages.filename}>
                  <img alt='' style={{width: "100%"}} src={`http://localhost:5000/api/image/${each.bookImages.filename}`} /> 
                </a>
              ))
          }
        </Zoom>
      </div>
    )
}
export default Slide