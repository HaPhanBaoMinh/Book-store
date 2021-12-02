import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux"
import formatCash from '../../../../function/formatMoney';

function RowItem({index, cartItem, updateSumTotal}) {
    const [Price, setPrice] = useState(0);
    const [Total, setTotal] = useState(0);

    const bookList = useSelector((state) => state.bookList);

    const checkPrice = (bookList) => {
        const {bookId, bookPrice} = bookList;
        return {bookId, bookPrice}
    }

    const ProductList = bookList.map(item => checkPrice(item));

    const checkItemPrice = () => {
        // console.log(ProductList.find(product => product.bookId === cartItem.bookId));
        let Check = ProductList.find(product => product.bookId === cartItem.bookId);
        Check ? setPrice(Check.bookPrice.newPrice) : setPrice(0) ;
        // return Check
    }

    useEffect(() => {
        checkItemPrice();
    }, [])
    
    useEffect(() => {
        setTotal( Price* cartItem.count);
    }, [Price])

    useEffect(() => {
        updateSumTotal(Total)
    }, [Total])
    
    console.log(Total);


    return (
        
        <tr className="tr" key={index} >
        <td className="td" > {index + 1} </td>
        <td className="td" > {cartItem.bookId} </td>
        <td className="td" > {formatCash(Price)} đ </td>
        <td className="td" > {cartItem.count} </td>
        <td className="td" > {formatCash(Total)} đ  </td>
    </tr>    
        
    )
}

export default React.memo(RowItem)
