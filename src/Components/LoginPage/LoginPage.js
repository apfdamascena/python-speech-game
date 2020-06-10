import React, { Component } from 'react';
import LogoInputLogo from '../LoginInputLogo/LoginInputLogo';
import LoginInput from '../LoginInput/LoginInput';
import fire from '../../FireBase/FireBase'

class LoginPage extends Component {
    constructor(props){
        super(props);
       
    }

    render() {
        return (
            <div>
                <LogoInputLogo/>
                <LoginInput 
                    handleButtonPressed={this.props.didTapLoginButton}
                    newUser={this.props.createNewUser}/>
            </div>
        );
    }
}

export default LoginPage;