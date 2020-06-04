import React, { Component } from 'react';
import LogoInputLogo from '../LoginInputLogo/LoginInputLogo';
import LoginInput from '../LoginInput/LoginInput';
import fire from '../../FireBase/FireBase'

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
            user: {}
        }
    }
    componentDidMount = () => {
        this.authListener();

    }
    authListener = () => {
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user});
            } else {
                this.setState({user: null});
            }
        });
    }
    render() {
        return (
            <div>
                <LogoInputLogo></LogoInputLogo>
                <LoginInput handleButtonPressed={this.props.didTapLoginButton}
                newUser= {this.props.createNewUser}
                ></LoginInput>
            </div>
        );
    }
}

export default LoginPage;