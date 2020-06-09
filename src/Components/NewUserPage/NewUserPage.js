import React, { Component } from 'react';
import LogoInputLogo from '../LoginInputLogo/LoginInputLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserEdit} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faUserLock} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import './NewUserPage.css'
import OrangeButton from '../OrangeButton/OrangeButton'
import {fire} from '../../FireBase/FireBase'
import {database} from '../../FireBase/FireBase';


class NewUserPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPasswrod: "",
            score: 0
        }
    }

    writeUserData = (UserId,name,email,score) => {
        firebase.database().ref('users/'+UserId).set({
            Username : name,
            Email : email,
            Score : score 
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : [event.target.value]
        });
    }

    signUp = (event) => {
        event.preventDefault();
        if(this.state.password == this.state.confirmPasswrod){
            fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((user) => {
                console.log(user);
                this.writeUserData(this.state.email,this.state.username,this.state.email,this.state.score);
            }).catch((error) => {
                console.log(error);
                alert("Error to create a new user");
            });
        } else {
            alert("Passwords aren't equal");
        }
    }

    render() {
        return (
            <div>
                <OrangeButton action="GO BACK" handleButtonPressed={this.props.didTapGoBackLogin}/>
                <LogoInputLogo/>
                <div className="UserName">
                    <a className="UserIcon"><FontAwesomeIcon icon={faUserEdit}/></a>
                    <input className="name"
                    placeHolder="Username"
                    name="username"
                    onChange = {this.handleChange}
                    value = {this.state.username}
                    ></input>
                </div>
                <div className="UserEmail">
                    <a className="EmailIcon"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <input className="Email"
                    placeHolder="Email"
                    type="email"
                    onChange= {this.handleChange}
                    name="email"
                    value = {this.state.email}
                    ></input>
                </div>
                <div className="UserPassword">
                    <a className="PasswordIcon"><FontAwesomeIcon icon={faUserLock}/></a>
                    <input className="Password"
                    placeHolder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value = {this.state.password}
                    ></input>
                </div>
                <div className="ConfirmUserPassword">
                    <a className="iconConfirmUserPassword"><FontAwesomeIcon icon={faLock} /></a>
                    <input className="ConfirmPassword"
                    placeHolder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    onChange = {this.handleChange}
                    value = {this.state.confirmPassword}
                    ></input>
                </div>
                <div className= "buttonCreateUser" onClick={this.signUp}>
                    <a>Create</a>
                </div>
            </div>
        );
    }
}

export default NewUserPage;