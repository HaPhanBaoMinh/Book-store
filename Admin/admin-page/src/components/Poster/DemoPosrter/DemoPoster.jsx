import React, {useEffect, useState, useRef} from 'react';
import "./Styles.css";
import SimpleImageSlider from "react-simple-image-slider";
import {useSelector} from 'react-redux';

const DemoPoster = ({poster}) => {
    // demoImg.current =  poster.map(poster => ({url: `http://localhost:5000/api/image/${poster.bookImages.filename}`}))
    let demoImg = useRef([])
 
    
    useEffect(() => 
    {
        demoImg.current =  poster.map(poster => ({url: `http://localhost:5000/api/image/${poster.bookImages.filename}`})) 
    }, [])
    // console.log([...poster.bookImages]);  
   

    return (
        <>
            <div className="DemoPoster" >
                {demoImg.current.length > 0 ? (<SimpleImageSlider
                    style={{position: 'relative', borderRadius: "10px"}}
                    width={600}
                    height={365}
                    images={demoImg.current}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    showNavs={false}
                />) : <> </> }
            </div>
        </>
    )
}

export default React.memo(DemoPoster)