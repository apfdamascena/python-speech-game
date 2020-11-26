import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import LogoInputLogo from '../../helpComponents/LoginInputLogo/LoginInputLogo';
import LoginInput from '../../helpComponents/LoginInput/LoginInput';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import './responsive.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: ""
        }
    }

    handlePageChange = () => {
        this.setState({redirect : "/about-page"})
    }

    handleProvacyPolicy = () => {
        this.setState({ redirect : "/privacy-policy"})
    }

    render() {
        if(this.state.redirect){
            return(
                <Redirect to = {{
                    pathname:this.state.redirect,
                    state : window.location.href
                }}/>
            );
        }
        return (
            <div className="containerLoginPage">
                <OrangeButton idButton="rightOrangeButton" action="ABOUT" onClick = {this.handlePageChange}/>
                <OrangeButton idButton = "leftOrangeButton"action="PPRIVACY POLICY" onClick = {this.handleProvacyPolicy}/>
                <LogoInputLogo />
                <LoginInput
                    handleButtonPressed={this.props.didTapLoginButton}
                    newUser={this.props.createNewUser} />
            </div>
        );
    }
}

export default LoginPage;