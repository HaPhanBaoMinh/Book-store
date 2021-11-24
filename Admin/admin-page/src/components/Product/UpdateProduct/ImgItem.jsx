import React from 'react'

export const ImgItem = ({srcImg}) => {
    return (
       <div className="imgDiv">
             <img src={`http://localhost:5000/api/image/${srcImg.filename}`} 
                        alt="" srcset="" height="190px"  />
       </div>
    )
}
