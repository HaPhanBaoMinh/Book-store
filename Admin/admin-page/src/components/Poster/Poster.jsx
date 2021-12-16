import React  from 'react'
import "./Styles.css";
import  PosterItem  from './PosterItem/PosterItem';
import {PostForm} from "./PostForm/PostForm";
import {useSelector } from 'react-redux';




 
export const Poster = () => {
const poster = useSelector(state => state.posterList)
 

    return (
       <>
            <div className="PosterLayout">
                <PostForm  />
            </div>

            <div className="PosterList">
                {poster.length > 0 ? 
                    poster.map(poster => <PosterItem poster={poster} key={poster._id} /> )
                 : <> </>}
            </div>
       </>
    )
}

