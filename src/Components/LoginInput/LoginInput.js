import React, { Component } from 'react';
import './LoginInput.css'

class LoginInput extends Component {
    render() {
        return (
            <div className="login">
                <div>
                    <input className="email"
                    placeHolder="Email"
                    type="email"
                    ></input>
                </div>
                <div>
                    <input className = "password"
                    placeHolder="Password"
                    type="password"
                    ></input>
                </div>
            </div>
        );
    }
}
export default LoginInput;