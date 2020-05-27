import React, { Component } from 'react';
import LogoInputLogo from '../LoginInputLogo/LoginInputLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserEdit} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faUserLock} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import './NewUserPage.css'
import OrangeButton from '../OrangeButton/OrangeButton'


class NewUserPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <OrangeButton action="GO BACK"/>
                <LogoInputLogo/>
                <div className="UserName">
                    <a className="UserIcon"><FontAwesomeIcon icon={faUserEdit}/></a>
                    <input className="name"
                    placeHolder="Username"
                    ></input>
                </div>

                <div className="UserEmail">
                    <a className="EmailIcon"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <input className="Email"
                    placeHolder="Email"
                    type="email"
                    ></input>
                </div>

                <div className="UserPassword">
                    <a className="PasswordIcon"><FontAwesomeIcon icon={faUserLock}/></a>
                    <input className="Password"
                    placeHolder="Password"
                    type="password"
                    ></input>
                </div>

                <div className="ConfirmUserPassword">
                    <a className="iconConfirmUserPassword"><FontAwesomeIcon icon={faLock} /></a>
                    <input className="ConfirmPassword"
                    placeHolder="Confirm Password"
                    type="password"
                    ></input>
                </div>
                <div className= "buttonCreateUser">
                    <a>Create</a>
                </div>
            </div>
        );
    }
}

export default NewUserPage;