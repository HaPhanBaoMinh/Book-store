import React, {useState} from 'react'
import axios from "axios";
import './Styles.css'

const LoginPage = () => {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    const onSubmit = (userName, passWord, event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/auth/login', {
            username: userName,
            password: passWord
        })
        .then(res => {
            return res.data
        })
        .then(res => {
            console.log(res.refreshToken);
            // localStorage.setItem("token", JSON.stringify(res.token));
            localStorage.setItem("refreshToken", JSON.stringify(res.refreshToken));
            setCookie('token', res.token, 1);
            // setCookie('refreshToken', res.refreshToken, 1);
        })
        .then(res => window.location.assign('http://localhost:5000/admin/home'))
        .catch(err => console.log(err))
       
    }


    return (
        <div className="login-page" >
            <div className="login-box">
                <h1> LOGIN </h1>
                <div className="login-account">
                    <form action="http://localhost:5000/auth/login" method="POST" >
                        <div className="login-info">
                            <input type="text" placeholder="User Name" name="username" onChange={(e) => {
                                setUserName( e.target.value )
                            }} />
                            <input type="password" placeholder="Password" name="password"    onChange={(e) => {
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
