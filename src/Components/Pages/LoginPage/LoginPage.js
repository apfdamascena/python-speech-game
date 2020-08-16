import React, { Component } from 'react';
import LogoInputLogo from '../../helpComponents/LoginInputLogo/LoginInputLogo';
import LoginInput from '../../LoginInput/LoginInput';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import './responsive.css';

class LoginPage extends Component {
    constructor(props){
        super(props);
       
    }

    render() {
        return (
            <div className = "containerLoginPage">
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