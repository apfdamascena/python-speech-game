import React, { Component } from 'react';
import './LoginInput.css'

class LoginInput extends Component {
    render() {
        return (
            <div className="login">
                <input className="email"
                placeHolder="Email"
                ></input>
                <input className = "password"
                placeHolder="Password"
                securityTextEntry={true}
                ></input>
            </div>
        );
    }
}
export default LoginInput;