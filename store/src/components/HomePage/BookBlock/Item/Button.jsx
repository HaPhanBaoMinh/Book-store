import React from 'react';

const Button = ({check}) => {
    return (
        check === 1 ? (
        <div className='button_div' >
            <button className='right' >
                
            </button>
        </div>
        ) : (
        <div className='button_div' >
            <button className='left' >
                
            </button>
        </div>
        )
    )
}

export default Button
