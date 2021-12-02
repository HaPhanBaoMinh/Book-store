import React, {useState} from 'react';
import './Styles.css';
import axios from "axios";
import update from 'react-addons-update';
import { useLocation } from "react-router-dom"

const formData = new FormData();

export const PostProduct = () => {
    const location = useLocation()
    const book = location.state;
    console.log(book);

    const [bookData, setBookData] = useState({
        bookName: '',
        bookQuantity: 0,
        // bookImages: {},
        bookPrice: {
            oldPrice: 0,
            newPrice: 0
        },
        bookDescription: '',
        booktags: [],
        bookId: '',
        author: ''
    })

    // console.log(bookData);

    const handleUpdateTags = (index, value) =>{
        setBookData(update(bookData, {
            booktags: {
                [index]: {
                    $set: value
                }
            }
        })) 
    }

    

    const handleSubmit =  async (e) => {
        e.preventDefault();
       
        formData.append('booktags[0]', bookData.booktags[0]);
        formData.append('booktags[1]', bookData.booktags[1]);
        formData.append('booktags[2]', bookData.booktags[2]);
        formData.append('bookName', bookData.bookName);
        formData.append('author', bookData.author);
        formData.append('bookQuantity', bookData.bookQuantity); 
        formData.append('bookId', bookData.bookId);
        formData.append('bookDescription', bookData.bookDescription);
        formData.append('bookPrice[oldPrice]', bookData.bookPrice.oldPrice );
        formData.append('bookPrice[newPrice]', bookData.bookPrice.newPrice );

        await axios.post('http://localhost:5000/api/booksList', formData)
        .then((res) => {
            console.log("Sccusset")
        })

        .catch(err => console.log(err));
      
        await window.location.reload();

    }


    return (
        <div className="post-form" >
            <div className="post-form_heder">
                <h3> New product </h3>
            </div>

            <div className="container">
                <div className="post-form_content">
                    <h3 className="details" > Details </h3>
                    <form action="" enctype="multipart/form-data">
                        <div className="post-form_item">
                            <label htmlFor="name"> Book title: </label>
                            <input type="text" id="name" onChange={(e) => {
                                setBookData({
                                    ...bookData,
                                    bookName: e.target.value
                                })
                            }}  />

                           

                        </div>

                        <div className="post-form_item">
                            <label htmlFor="autho"> Author: </label>
                            <input type="text" id="autho"  onChange={(e) => {
                                setBookData({
                                    ...bookData,
                                    author: e.target.value
                                })
                            }}  />
                        </div>
 
                        <div className="post-form_item book-id">
                           <div className="book-id_layout">
                           <label htmlFor="id"> Book ID: </label>
                            <input type="text" id="id" onChange={(e) => {
                                 setBookData({
                                    ...bookData,
                                    bookId: e.target.value
                                })
                            }} />
                           </div>
                           {/* <button> add image </button> */}
                           <input type="file" id="id" name="file" multiple onChange={(e) => {

                               const files = e.target.files;

                                for (let i = 0; i < files.length; i++) {
                                    formData.append('file', files[i])  
                                }

                            //    formData.append('file', e.target.files[0])
                               console.log(...formData);
                           } } />

                        
                        </div>
                        

                        <div className="post-form_price">
                            <div className="post-form_price-item">
                                <label htmlFor="oldprice"> Old price: </label>
                                <input type="number" id="oldprice"  onChange={(e) => {
                                setBookData({
                                    ...bookData,
                                    bookPrice: {
                                        ...bookData.bookPrice,
                                        oldPrice: e.target.value
                                    }
                                })
                            }}  />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="newprice"> New price: </label>
                                <input type="number" id="newprice"  onChange={(e) => {
                                setBookData({
                                    ...bookData,
                                    bookPrice: {
                                        ...bookData.bookPrice,
                                        newPrice: e.target.value
                                    }
                                })
                            }}  />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="newprice"> Quantity: </label>
                                <input type="number" id="quantyti" onChange={(e) => {
                                setBookData({
                                    ...bookData,
                                    bookQuantity: e.target.value
                                })
                            }}  />
                            </div>
                        </div>

                        <div className="post-form_price">
                            <div className="post-form_price-item">
                                <label htmlFor="tag1"> #Tag1: </label>
                                <input type="text" id="tag1" onChange={(e) => {
                                    handleUpdateTags(0, e.target.value);
                                }} />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="tag2"> #Tag2: </label>
                                <input type="text" id="tag2" onChange={(e) => {
                                    handleUpdateTags(1, e.target.value);
                                }}  />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="tag3"> #Tag3: </label>
                                <input type="text" id="tag3" onChange={(e) => {
                                    handleUpdateTags(2, e.target.value);
                                }}    />
                            </div>
                        </div>
                        <button  type="submit" onClick={(e) => handleSubmit(e)} > post product </button>
                    </form>
                </div>

                <div className="post-form_img">
                    <div className="decription">
                    <h3 className="details" > description </h3>
                    <textarea name="" id="" cols="65" rows="10"  onChange={(e) => {
                                setBookData({
                                    ...bookData,
                                    bookDescription: e.target.value
                                })
                            }}  ></textarea>
                    </div>

                        <h3 className="details" > images </h3>
                    <div className="imgList"> 
                            {/* <ImgItem />
                            <ImgItem />
                            <ImgItem />
                            <ImgItem />
                            <ImgItem />
                            <ImgItem /> */}
                    </div>

                </div>
            </div>
        </div>
    )
}
