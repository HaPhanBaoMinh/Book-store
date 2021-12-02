import React from 'react';
import "./Styles.css";
import { BsXCircle } from "react-icons/bs";
import axios from 'axios';
import { deleteOrderItem } from '../../../actions/PosterList';
import {useDispatch} from "react-redux";


const PosterItem = ({poster}) => {
    const dispatch = useDispatch();

    const handleOnClik = async () => {
        await axios.delete(`http://localhost:5000/api/posterList/${poster._id}?imgId=${poster.bookImages.id}`);
        dispatch(deleteOrderItem(poster._id));
        // console.log(poster._id);
    }

    return ( 
        <>
            <div className="PosterItem" >
                <button onClick={() => handleOnClik()} >  <BsXCircle /> </button>
                {/* <img src={srcImg} alt="" height="100%" width="100%"  /> */}
                <img src={`http://localhost:5000/api/image/${poster.bookImages.filename}`} alt="" height="100%" width="100%"  />
            </div>
        </>
    )
}

export default PosterItem;