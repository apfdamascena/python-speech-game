import React, { Component } from 'react';
import './LoginInputLogo.css'
import logoImageInput from './logoLogin.png'
import OrangeButton from '../OrangeButton/OrangeButton'

class LogoInputLogo extends Component {
    render() {
        return (
            <div className="containerLogin">
                <div className="imageLogin">
                    <img src={logoImageInput}/>
                </div>
            </div>
        );
    }
}

export default LogoInputLogo;