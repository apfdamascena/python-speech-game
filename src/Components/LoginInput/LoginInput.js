import React, { Component } from 'react';
import './LoginInput.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'

class LoginInput extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="login">
                <div className= "emailUser">
                    <a className="iconUser"href="#"><FontAwesomeIcon icon={faUser}/></a>
                    <input className="email"
                    placeHolder="Email"
                    type="email"
                    ></input>
                </div>
                <div className="passwordUser">
                    <a className="iconPassword"href="#"><FontAwesomeIcon icon={faLock} /></a>
                    <input className="password"
                    placeHolder="Password"
                    type="password"
                    ></input>
                </div>
                <div className= "buttonLogin" onClick={this.props.handleButtonPressed}>
                    <a>Login</a>
                </div>
                <div className="newUser">
                    <a className="newUserIcon"href="#"><FontAwesomeIcon icon={faUserPlus}/> New to PythonTest? SIGN UP</a>
                </div>
            </div>
        );
    }
}
export default LoginInput;