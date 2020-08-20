import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import API from '../../../services/API';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faLock, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import './LoginInput.css'
import './responsive.css'

class LoginInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null
        }
    }

    login = () => {
        const [email, password] =[this.state.email, this.state.password];
        API.post('login-page', {
            email: email, password: password
        }).then(() => {
            let history = useHistory();
            history.push('/option-page');
        }).catch((error) => {
            console.log("deu ruim");
        })
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

                <Link to= "/new-user-page" className="newUser">
                    <a className="newUserIcon" onClick={this.props.newUser}><FontAwesomeIcon icon={faUserPlus}/> New to PythonTest? SIGN UP</a>
                </Link>
            </div>
        );
    }
}
export default LoginInput;