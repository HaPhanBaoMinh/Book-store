import React, {useState} from 'react';
import './Styles.css';
import axios from "axios";
import update from 'react-addons-update';
import {  useParams } from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux';
import {ImgItem} from "./ImgItem";
import addonsUpdate from 'react-addons-update';
import {updateBookList} from '../../../actions/BookList'



export const UpdateProduct = () => { 
    const dispatch = useDispatch();
    const {bookId} = useParams();
    const bookList = useSelector(state => state.bookList.filter(book => book.bookId === bookId ) );
    let book;
    !(bookList[0] === undefined) ?  book = bookList[0] : book = {
        bookName: '',
        bookQuantity: 0,
        bookImages: [],
        bookPrice: {
            oldPrice: 0,
            newPrice: 0
        },
        bookDescription: '',
        booktags: [],
        bookId: '',
        author: ''
    };

    const [bookData, setBookData] = useState(book);
    console.log(bookData);

    const handleUpdateTags = (index, value) =>{
        setBookData(addonsUpdate(bookData, {
            booktags: {
                [index]: {
                    $set: value
                }
            }
        }))
    }

    const handleDeleteImage = (imgId) => {
        setBookData({
            ...bookData,
            bookImages: bookData.bookImages.filter(image => image.id !== imgId)
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBookList(bookData));
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
                            <input type="text" id="name" value={bookData.bookName} />

                           

                        </div>

                        <div className="post-form_item">
                            <label htmlFor="autho"> Author: </label>
                            <input type="text" id="autho" value={bookData.author}  />
                        </div>

                        <div className="post-form_item book-id">
                           <div className="book-id_layout">
                           <label htmlFor="id"> Book ID: </label>
                            <input type="text" id="id" value={bookData.bookId}  />
                           </div>
                           {/* <button> add image </button> */}
                           

                        
                        </div>
                        

                        <div className="post-form_price">
                            <div className="post-form_price-item">
                                <label htmlFor="oldprice"> Old price: </label>
                                <input type="number" id="oldprice" value={bookData.bookPrice.oldPrice}  />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="newprice"> New price: </label>
                                <input type="number" id="newprice" value={bookData.bookPrice.newPrice}  />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="newprice"> Quantity: </label>
                                <input type="number" id="quantyti" value={bookData.bookQuantity}  />
                            </div>
                        </div>

                        <div className="post-form_price">
                            <div className="post-form_price-item">
                                <label htmlFor="tag1"> #Tag1: </label>
                                <input type="text" id="tag1" value={bookData.booktags[0]} />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="tag2"> #Tag2: </label>
                                <input type="text" id="tag2" value={bookData.booktags[1]} />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="tag3"> #Tag3: </label>
                                <input type="text" id="tag3" value={bookData.booktags[2]} />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="post-form_img">
                    <div className="decription">
                    <h3 className="details" > description </h3>
                    <textarea name="" id="" cols="65" rows="10" value={bookData.bookDescription}  ></textarea>
                    </div>

                        <h3 className="details" > images </h3>
                        

                        
                    <div className="imgList">
                            {/* <ImgItem />
                            <ImgItem />
                            <ImgItem />
                            <ImgItem />
                            <ImgItem />
                            <ImgItem /> */}
                            {bookData.bookImages.map(imgSrc => <ImgItem srcImg={imgSrc} handleDeleteImage={handleDeleteImage} />)}
                    
                    </div>

                </div>
            </div>
        </div>
    )
}
