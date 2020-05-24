import React, { Component } from 'react';
import './LoginInput.css'
import { user } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LoginInput extends Component {
    render() {
        return (
            <div className="login">
                <div>
                    <a className="logoUser"href="#"><FontAwesomeIcon icon={user} /></a>
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