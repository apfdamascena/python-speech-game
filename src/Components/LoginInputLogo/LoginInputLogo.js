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
                <OrangeButton idButton="rightOrangeButton" action="About" handleButtonPressed={this.props.didTapAboutPage}/>
            </div>
        );
    }
}

export default LogoInputLogo;