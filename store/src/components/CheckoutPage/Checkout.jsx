import React, { useState, useEffect } from 'react';
import CheckoutItem from './CheckoutItem';
import "./Styles.css";
import axios from "axios";
import { useSelector } from 'react-redux';
import formatCash from '../../functions/formatMoney';

const Checkout = () => {
    const [provinces, setProvinces] = useState([]);
    const [provincesId, setProvincesId] = useState(0);

    const [district, setDistrict] = useState([]);
    const [districtId, setdDstrictId] = useState(0)

    const [ward, setWard] = useState([]);
    const [wardId, setWardId] = useState(0);

    const cartList = useSelector(state => state.cartList );
    const sumPrice = useSelector(state => state.sumPrice);

    const [order, setOrder] = useState({
        contactInfo: {
            customerName: '',
            email: '',
            address: {
                province: '',
                district: '',
                ward: '',
                detailedAddress: ''
            },
            phoneNumber: '',

        },
        cart: cartList
    });

   const getProvinces = () => {
        axios.get('https://vapi.vnappmob.com/api/province/')
        .then(({data} )=> setProvinces(data.results))
        .catch(err => console.log(err))
   }

   const getDistricts = () => {
    axios.get(`https://vapi.vnappmob.com/api/province/district/${provincesId}`)
    .then(({data} )=> setDistrict(data.results))
    .catch(err => console.log(err))
   } 

   const getWard = () => {
    axios.get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`)
    .then(({data} )=> setWard(data.results))
    .catch(err => console.log(err))
   } 

   const updateAddress = ( key,value) => {
        setOrder( {
            ...order,
            contactInfo: {
                ...order.contactInfo,
                address: {
                    ...order.contactInfo.address,
                    [key]: value
                }
            }
        } )
   }

   const checkAddress = (array ,addressType, addId) => {
       const result = array.filter(add => add[`${addressType}_id`] === addId)[0];
       if(result) return (result[`${addressType}_name`])
       return
   }

   const onSubmit = async (e,order) => {
        e.preventDefault()
        axios.post("http://localhost:5000/store/orderList", order)
        .then(() => alert(' ?????t h??ng th??nh c??ng! '));

   }

//   console.log(order) 

   useEffect(() => {
    let mount = true
    if(mount){
        getProvinces()
    }
    return function cleanup(){  
        mount = false
    }
}, [])

useEffect(() => {
    let mount = true
    if(mount){
        getDistricts()
        updateAddress( 'province' , checkAddress(provinces, 'province', provincesId));
    }
    return function cleanup(){
        mount = false
    }
}, [provincesId])

useEffect(() => {
    let mount = true
    if(mount){
        getWard()
        updateAddress( 'district' , checkAddress(district, 'district', districtId));
    }
    return function cleanup(){
        mount = false
    }
}, [districtId])

useEffect(() => {
    let mount = true
    if(mount){
        updateAddress( 'ward' , checkAddress(ward, 'ward', wardId));
    }
    return function cleanup(){
        mount = false
    }
}, [wardId])



    return (
        <div className='checkout'>
            <div className="checkout_info">
                <h3 className='header' > Th??ng tin giao h??ng  </h3>

                <form>
                    <input type="text" className='author-name' placeholder=' H??? v?? T??n' onChange={(e) => {
                        setOrder({
                            ...order,
                            contactInfo: {
                                ...order.contactInfo,
                                customerName: e.target.value
                            }
                        })
                    }} />
                    <div className="contact_info" >
                        <input type="text" className='author_email' placeholder='Email' onChange={(e) => {
                        setOrder({
                            ...order,
                            contactInfo: {
                                ...order.contactInfo,
                                email: e.target.value
                            }
                        })
                    }} />
                        <input type="text"  className='author_phone' placeholder='S??? ??i???n tho???i' onChange={(e) => {
                        setOrder({
                            ...order,
                            contactInfo: {
                                ...order.contactInfo,
                                phoneNumber: e.target.value
                            }
                        })
                    }} />
                    </div>

                    <input type="text" placeholder='?????a ch???' className='author_address' onChange={(e) => {
                        setOrder({
                            ...order,
                            contactInfo: {
                                ...order.contactInfo,
                                address: {
                                    ...order.contactInfo.address,
                                    detailedAddress: e.target.value
                                }
                            }
                        })
                    }} />
                    <div className="address_info">

                        <select name="city" id="provinces" onChange={(e) => {
                            setProvincesId(e.target.value); 
                        } }  >

                            <option value="default"> Ch???n t???nh / th??nh </option>
                            { provinces.map(pro => (
                                <option key={pro.province_id} value={pro.province_id} > {pro.province_name} </option>
                            )) }
                        </select>

                        <select name="city" id="district"  onChange={(e) => {
                            setdDstrictId(e.target.value);
                        } }  >
                            <option value="default"> Ch???n qu???n / huy???n </option>
                            { district.map(dis => (
                                <option key={dis.district_id} value={dis.district_id} > {dis.district_name} </option>
                            ))

                            }
                        </select>

                        <select name="city" id="ward" onChange={(e) => setWardId(e.target.value) } >
                            <option value="default"> Ch???n ph?????ng / x?? </option>
                            { ward.map(war => (
                                <option key={war.ward_id} value={war.ward_id} > {war.ward_name} </option>
                            ))

                            }
                        </select>

                    </div>

                    <div className='checout_button' >
                        <button type='submit' onClick={(e) => onSubmit(e, order) } >
                            Ho??n t???t ????n h??ng
                        </button>    
                    </div>

                </form>

            </div>

            <div className="checkout_cart">
                <div className="checout_list">
                    {
                        cartList.map(item => (
                            <CheckoutItem cartItem={item} key={item._id} />
                        ))
                    }
                </div>

                <div className="checout_sum">
                    <h4> T???ng c???ng: </h4>
                    <h4> {formatCash(sumPrice)}?? </h4>
                </div>
            </div>
        </div>
    )
}

export default Checkout
