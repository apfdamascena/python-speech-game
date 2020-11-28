/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserEdit,
    faEnvelope,
    faUserLock,
    faLock,
} from '@fortawesome/free-solid-svg-icons';
import {
    NotificationContainer,
    NotificationManager,
} from 'react-notifications';
import API from '../../../services/API';

import LogoInputLogo from '../../helpComponents/LoginInputLogo/LoginInputLogo';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';

import './NewUserPage.css';
import './responsive.css';

class NewUserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            score: 0,
            redirect: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: [event.target.value],
        });
    };

    handleChangePage = () => {
        this.setState({ redirect: '/login-page' });
    };

    handleButtonPrivacyPolicyPressed = () => {
        this.setState({ redirect: '/privacy-policy' });
    };

    signUp = () => {
        const checkbox = document.getElementById('checkbox');
        if (checkbox.checked === true) {
            const {
                username,
                email,
                password,
                confirmPassword,
                score,
            } = this.state;
            API.post('new-user-page', {
                username: username[0],
                email: email[0],
                password: password[0],
                confirmPassword: confirmPassword[0],
                score,
            })
                .then(() => {
                    this.handleChangePage();
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            NotificationManager.error(
                'You need to agree to the privacy terms! Read and come back here!',
            );
        }
    };

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return (
                <Redirect
                    to={{
                        pathname: redirect,
                        state: window.location.href,
                    }}
                />
            );
        }

        return (
            <form className="containerNewUser">
                <div id="leftSide">
                    <OrangeButton
                        action="GO BACK"
                        onClick={this.handleChangePage}
                        idButton="leftOrangeButtonNewUser"
                    />
                    <OrangeButton
                        action="PRIVACY POLICY"
                        idButton="rightOrangeButtonNewUser"
                        onClick={this.handleButtonPrivacyPolicyPressed}
                    />
                </div>
                <div id="imageNewUSer">
                    <LogoInputLogo />
                </div>
                <div className="UserName">
                    <a className="UserIcon">
                        <FontAwesomeIcon icon={faUserEdit} />
                    </a>
                    <input
                        className="name"
                        placeholder="Username"
                        name="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                </div>
                <div className="UserEmail">
                    <a className="EmailIcon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <input
                        className="Email"
                        placeholder="Email"
                        type="email"
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.email}
                    />
                </div>
                <div className="UserPassword">
                    <a className="PasswordIcon">
                        <FontAwesomeIcon icon={faUserLock} />
                    </a>
                    <input
                        className="Password"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                </div>
                <div className="ConfirmUserPassword">
                    <a className="iconConfirmUserPassword">
                        <FontAwesomeIcon icon={faLock} />
                    </a>
                    <input
                        className="ConfirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        onChange={this.handleChange}
                        value={this.state.confirmPassword}
                    />
                </div>

                <div className="check-box">
                    <input id="checkbox" type="checkbox" />
                    <p>Agree to the terms of the privacy policy</p>
                </div>

                <div className="buttonCreateUser" onClick={this.signUp}>
                    <a>Create</a>
                </div>
                <NotificationContainer />
            </form>
        );
    }
}

export default NewUserPage;
