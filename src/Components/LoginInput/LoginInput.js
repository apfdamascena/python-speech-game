import React, { Component } from 'react';
import './LoginInput.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import fire from '../../FireBase/FireBase';
import './responsive.css'

class LoginInput extends Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: ""
        }
    }

    anonymousLogin = (event) => {
        event.preventDefault();
        fire.auth().signInAnonymously().then((user) => {
            this.props.handleButtonPressed();
        }).catch((error) => {
            console.log(error);
        });
    }

    login = (event) => {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((user) => {
            this.props.handleButtonPressed();
        }).catch((error) => {
            console.log(error);
        });
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    render() {
        return (
            <div className="login">
                <div className= "emailUser">
                    <a className="iconUser"href="#"><FontAwesomeIcon icon={faUser}/></a>
                    <input className="email"
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    ></input>
                </div>
                <div className="passwordUser">
                    <a className="iconPassword"href="#"><FontAwesomeIcon icon={faLock} /></a>
                    <input className="password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    ></input>
                </div>

                <div className= "buttonsBlackLoginPage">
                    <div  id = "login" className= "buttonLogin" onClick={this.login}><a>Login</a></div>
                    <div id="anony" className= "buttonLogin" onClick={this.anonymousLogin}><a>Anonymous</a></div>
                </div>

                <div className="newUser">
                    <a className="newUserIcon" onClick={this.props.newUser}><FontAwesomeIcon icon={faUserPlus}/> New to PythonTest? SIGN UP</a>
                </div>
            </div>
        );
    }
}
export default LoginInput;