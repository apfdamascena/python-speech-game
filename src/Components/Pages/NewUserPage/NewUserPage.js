import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../services/API';

import LogoInputLogo from '../../helpComponents/LoginInputLogo/LoginInputLogo';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faEnvelope, faUserLock, faLock } from '@fortawesome/free-solid-svg-icons';

import './NewUserPage.css';
import './responsive.css';


class NewUserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            score: 0
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: [event.target.value]
        });
    }

    signUp = () => {
        const [username,email, password, confirmPassword, score] = [
            this.state.username[0], this.state.email[0], this.state.password[0],
            this.state.confirmPassword[0], this.state.score
        ];
        API.post('new-user-page', {
            username:username,
            email:email,
            password:password,
            confirmPassword:confirmPassword,
            score: score
        }).then(() => {
            console.log("foi"); 
        }).catch((error) => {console.log(error)})
    }

    render() {
        return (
            <form className = "containerNewUser">
                <Link to = "/login-page" id="leftSide">
                    <OrangeButton  action="GO BACK" handleButtonPressed={this.props.didTapRegister} />
                </Link>
                <div id ="imageNewUSer">
                    <LogoInputLogo />
                </div>
                <div className="UserName">
                    <a className="UserIcon"><FontAwesomeIcon icon={faUserEdit} /></a>
                    <input className="name"
                        placeholder="Username"
                        name="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    ></input>
                </div>
                <div className="UserEmail">
                    <a className="EmailIcon"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <input className="Email"
                        placeholder="Email"
                        type="email"
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.email}
                    ></input>
                </div>
                <div className="UserPassword">
                    <a className="PasswordIcon"><FontAwesomeIcon icon={faUserLock} /></a>
                    <input className="Password"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    ></input>
                </div>
                <div className="ConfirmUserPassword">
                    <a className="iconConfirmUserPassword"><FontAwesomeIcon icon={faLock} /></a>
                    <input className="ConfirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        onChange={this.handleChange}
                        value={this.state.confirmPassword}
                    ></input>
                </div>
                <div className="buttonCreateUser" onClick={this.signUp}>
                    <a>Create</a>
                </div>
            </form>
        );
    }
}

export default NewUserPage;