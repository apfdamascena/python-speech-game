import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogoInputLogo from '../../helpComponents/LoginInputLogo/LoginInputLogo';
import LoginInput from '../../helpComponents/LoginInput/LoginInput';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import './responsive.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="containerLoginPage">
                <Link to = "/about-page">
                    <OrangeButton idButton="rightOrangeButton" action="ABOUT"/>
                </Link>
                <LogoInputLogo />
                <LoginInput
                    handleButtonPressed={this.props.didTapLoginButton}
                    newUser={this.props.createNewUser} />
            </div>
        );
    }
}

export default LoginPage;