import React, { Component } from 'react';
import LogoInputLogo from '../LoginInputLogo/LoginInputLogo';
import LoginInput from '../LoginInput/LoginInput';
import OrangeButton from '../OrangeButton/OrangeButton';

class LoginPage extends Component {
    constructor(props){
        super(props);
       
    }

    render() {
        return (
            <div>
                <OrangeButton idButton="rightOrangeButton" action="ABOUT" handleButtonPressed={this.props.didTapAboutPage}/>
                <LogoInputLogo/>
                <LoginInput 
                    handleButtonPressed={this.props.didTapLoginButton}
                    newUser={this.props.createNewUser}/>
            </div>
        );
    }
}

export default LoginPage;