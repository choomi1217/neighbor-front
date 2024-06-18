import React, { useState } from 'react';
import axios from 'axios';

const SignUpButton = () => {
    const [signUpRequest, setSignUpRequest] = useState({
        nickname: '',
        password: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpRequest((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSignUp = async () => {
        axios.post('http://localhost:8080/accounts', signUpRequest)
            .then(response => {
                console.log(response.data);
                window.location.href = '/accounts/login';
            })
            .catch(error => {
                console.error('There was an error registering!', error);
            });
    };



    return (
        <div>
            <input
                type="text"
                name="nickname"
                placeholder="Nickname"
                value={signUpRequest.nickname}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={signUpRequest.password}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={signUpRequest.email}
                onChange={handleChange}
            />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUpButton;
