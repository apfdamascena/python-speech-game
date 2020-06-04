import React, { Component } from 'react';
import './LoginInput.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import fire from '../../FireBase/FireBase';

class LoginInput extends Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: ""
        }
    }

    login = (event) => {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((user) => {
            console.log(user);
        }).catch((error) => {
            console.log(error);
        })

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render() {
        return (
            <div className="login">
                <div className= "emailUser">
                    <a className="iconUser"href="#"><FontAwesomeIcon icon={faUser}/></a>
                    <input className="email"
                    placeHolder="Email"
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    ></input>
                </div>
                <div className="passwordUser">
                    <a className="iconPassword"href="#"><FontAwesomeIcon icon={faLock} /></a>
                    <input className="password"
                    placeHolder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    ></input>
                </div>
                <div className= "buttonLogin" onClick={this.login}>
                    <a>Login</a>
                </div>
                <div className="newUser">
                    <a className="newUserIcon"href="#" onClick={this.props.newUser}><FontAwesomeIcon icon={faUserPlus}/> New to PythonTest? SIGN UP</a>
                </div>
            </div>
        );
    }
}
export default LoginInput;