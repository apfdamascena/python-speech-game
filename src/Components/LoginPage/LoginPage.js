import React, { Component } from 'react';
import LogoInputLogo from '../LoginInputLogo/LoginInputLogo';
import LoginInput from '../LoginInput/LoginInput';

class LoginPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <LogoInputLogo></LogoInputLogo>
                <LoginInput></LoginInput>
            </div>
        );
    }
}

export default LoginPage;