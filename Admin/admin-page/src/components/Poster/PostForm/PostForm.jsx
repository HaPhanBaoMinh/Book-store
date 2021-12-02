import React,{useState} from 'react';
import "./Styles.css";
import axios from 'axios';

export const PostForm = () => {
    const formData = new FormData();

    const [linkTo, setLinkTo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        formData.append('linkTo', linkTo);

        await axios.post('http://localhost:5000/api/posterList', formData)
        .then((res) => {
            console.log("Sccusset")
        })

        .catch(err => console.log(err));

        
        console.log(...formData);
        await window.location.reload();
    }

    // console.log(linkTo); 

    const update = false;
    return (
        <div className="PostForm" >
            <div className="posterImg">
                {/* <img src={srcImg} alt="" height="100%" min-width="100%" /> */}
                <input type="file" id="id" name="file" onChange={(e) => {
                    formData.append('file', e.target.files[0])
                }} />
            </div>
            <div className="postAction">
                <label htmlFor="Link"> Link to: </label>
                <input type="text" id="Link" onChange={(e) => {
                    setLinkTo(e.target.value)
                }} />
                 <button onClick={(e) => handleSubmit(e)} > Update </button> 
            </div>
        </div> 
    )
}
