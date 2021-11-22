import React, {useState} from 'react';
import './Styles.css';
import axios from "axios";
import update from 'react-addons-update';
import { useLocation, useParams } from "react-router-dom"
import {useSelector} from 'react-redux';


export const UpdateProduct = () => {
  
    const {bookId} = useParams();
    const bookList = useSelector(state => state.bookList.filter(book => book.bookId === bookId ) );
    const book = bookList[0];
    console.log(book);

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
                            <input type="text" id="name" value={book.bookName} />

                           

                        </div>

                        <div className="post-form_item">
                            <label htmlFor="autho"> Author: </label>
                            <input type="text" id="autho"   />
                        </div>

                        <div className="post-form_item book-id">
                           <div className="book-id_layout">
                           <label htmlFor="id"> Book ID: </label>
                            <input type="text" id="id"  />
                           </div>
                           {/* <button> add image </button> */}
                           <input type="file" id="id" name="file" multiple  />

                        
                        </div>
                        

                        <div className="post-form_price">
                            <div className="post-form_price-item">
                                <label htmlFor="oldprice"> Old price: </label>
                                <input type="number" id="oldprice"   />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="newprice"> New price: </label>
                                <input type="number" id="newprice"  />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="newprice"> Quantity: </label>
                                <input type="number" id="quantyti"  />
                            </div>
                        </div>

                        <div className="post-form_price">
                            <div className="post-form_price-item">
                                <label htmlFor="tag1"> #Tag1: </label>
                                <input type="text" id="tag1"  />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="tag2"> #Tag2: </label>
                                <input type="text" id="tag2"  />
                            </div>

                            <div className="post-form_price-item">
                                <label htmlFor="tag3"> #Tag3: </label>
                                <input type="text" id="tag3"  />
                            </div>
                        </div>
                        <button  type="submit"  > upload product </button>
                    </form>
                </div>

                <div className="post-form_img">
                    <div className="decription">
                    <h3 className="details" > description </h3>
                    <textarea name="" id="" cols="65" rows="10" ></textarea>
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
