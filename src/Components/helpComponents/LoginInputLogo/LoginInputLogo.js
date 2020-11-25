import React, { Component } from 'react';
import './LoginInputLogo.css'
import logoImageInput from '../../../assets/images/logo.png';
import './responsive.css';

class LogoInputLogo extends Component {
    render() {
        return (
            <div className="containerLogin">
                <div className="imageLogin">
                    <img src={logoImageInput} alt = "Logo"/>
                </div>
            </div>
        );
    }
}

export default LogoInputLogo;