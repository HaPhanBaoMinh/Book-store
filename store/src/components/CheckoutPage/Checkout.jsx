import React, { useState, useEffect } from 'react';
import CheckoutItem from './CheckoutItem';
import "./Styles.css";
import axios from "axios";

const Checkout = () => {
    const [provinces, setProvinces] = useState([]);
    const [provincesId, setProvincesId] = useState(0);

    const [district, setDistrict] = useState([]);
    const [districtId, setdDstrictId] = useState(0)

    const [ward, setWard] = useState([]);
    const [wardId, setWardId] = useState(0)

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
        cart: []
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

  console.log(order)

   useEffect(() => {
    getProvinces()
}, [])

useEffect(() => {
    getDistricts()
    updateAddress( 'province' , checkAddress(provinces, 'province', provincesId));
}, [provincesId])

useEffect(() => {
    getWard()
    updateAddress( 'district' , checkAddress(district, 'district', districtId));
}, [districtId])

useEffect(() => {
    updateAddress( 'ward' , checkAddress(ward, 'ward', wardId));
}, [wardId])



    return (
        <div className='checkout'>
            <div className="checkout_info">
                <h3 className='header' > Thông tin giao hàng  </h3>

                <form>
                    <input type="text" className='author-name' placeholder=' Họ và Tên' onChange={(e) => {
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
                        <input type="text"  className='author_phone' placeholder='Số điện thoại' onChange={(e) => {
                        setOrder({
                            ...order,
                            contactInfo: {
                                ...order.contactInfo,
                                phoneNumber: e.target.value
                            }
                        })
                    }} />
                    </div>

                    <input type="text" placeholder='Địa chỉ' className='author_address' onChange={(e) => {
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

                            <option value="default"> Chọn tỉnh / thành </option>
                            { provinces.map(pro => (
                                <option key={pro.province_id} value={pro.province_id} > {pro.province_name} </option>
                            )) }
                        </select>

                        <select name="city" id="district"  onChange={(e) => {
                            setdDstrictId(e.target.value);
                        } }  >
                            <option value="default"> Chọn quận / huyện </option>
                            { district.map(dis => (
                                <option key={dis.district_id} value={dis.district_id} > {dis.district_name} </option>
                            ))

                            }
                        </select>

                        <select name="city" id="ward" onChange={(e) => setWardId(e.target.value) } >
                            <option value="default"> Chọn phường / xã </option>
                            { ward.map(war => (
                                <option key={war.ward_id} value={war.ward_id} > {war.ward_name} </option>
                            ))

                            }
                        </select>

                    </div>

                    <div className='checout_button' >
                        <button type='submit' >
                        Hoàn tất đơn hàng
                        </button>    
                    </div>

                </form>

            </div>

            <div className="checkout_cart">
                <div className="checout_list">
                    <CheckoutItem />
                    <CheckoutItem />
                    <CheckoutItem />
                    <CheckoutItem />
                </div>

                <div className="checout_sum">
                    <h4> Tổng cộng: </h4>
                    <h4> 1,000,000đ </h4>
                </div>
            </div>
        </div>
    )
}

export default Checkout
