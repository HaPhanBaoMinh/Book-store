import React, {useEffect} from 'react'
import "./Styles.css";
import  DemoPoster  from './DemoPosrter/DemoPoster';
import  PosterItem  from './PosterItem/PosterItem';
import {PostForm} from "./PostForm/PostForm";
import axios from 'axios';
import {useSelector, useDispatch } from 'react-redux';
import {getPosterList} from '../../actions/PosterList'



const demoImg = [
    'https://file.hstatic.net/200000123069/file/seneca-banner-shop-spiderum_7250b3e14e1a4c53a949902a0eb3a1cd.jpg',
    'https://file.hstatic.net/200000123069/file/spiderum-store-banner_57a17c456b49418784aea1dce097df8e.jpg',

]
 
export const Poster = () => {

    // const getPoster = async () => {
    //     axios.get('http://localhost:5000/api/posterList')
    //     .then(({data}) => {dispath(getPosterList(data))} )
    //     .catch(err => { throw err });
    // }

    // useEffect(() => getPoster(), []);

    const poster = useSelector(state => state.posterList)
 

    return (
       <>
            <div className="PosterLayout">
                {/* <DemoPoster poster= {poster} /> */}
                <PostForm srcImg={demoImg[1]} />
            </div>

            <div className="PosterList">
                {poster.length > 0 ? 
                    poster.map(poster => <PosterItem poster={poster} key={poster._id} /> )
                 : <> </>}
               
                
            </div>
       </>
    )
}

