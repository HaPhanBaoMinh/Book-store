import axios from 'axios';
import React, {useState} from 'react';
import { loginAction } from '../../actions/AccountToken';
import { useSelector, useDispatch } from 'react-redux';
import "./Styles.css";

const LoginPage = () => {
    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (userName, passWord, event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/login', {
            username: userName,
            password: passWord
        })
        .then(res => dispatch(loginAction(res)))
        // .then(res => window.location.assign('http://localhost:3000/admin'))
        .catch(err => console.log(err))
       
    }

    return (
        <div className="login-page" >
            <div className="login-box">
                <h1> LOGIN </h1>
                <div className="login-account">
                    <form action="">
                        <div className="login-info">
                            <input type="text" placeholder="User Name" onChange={(e) => {
                                setUserName( e.target.value )
                            }} />
                            <input type="password" placeholder="Password" onChange={(e) => {
                                setPassWord ( e.target.value )
                            }}  />
                        </div>
                        <button onClick={(e) => onSubmit(userName, passWord, e)} > LOGIN </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
