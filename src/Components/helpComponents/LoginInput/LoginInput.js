/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import API from '../../../services/API';
import './LoginInput.css';
import './responsive.css';

export default class LoginInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false,
            user: '',
        };
    }

    login = () => {
        const { email, password } = this.state;
        API.post('login-page', {
            email,
            password,
        })
            .then((object) => {
                const { user } = object.data;
                this.setState({ user });
                this.setState({ redirect: true });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        const { redirect, user } = this.state;
        const { uid } = user;
        if (redirect) {
            return (
                <Redirect
                    to={{
                        pathname: `/option-page/${uid}`,
                        state: user,
                    }}
                />
            );
        }
        return (
            <div className="login">
                <div className="emailUser">
                    <a className="iconUser" href="#">
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                    <input
                        className="email"
                        placeholder="Email"
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                </div>
                <div className="passwordUser">
                    <a className="iconPassword" href="#">
                        <FontAwesomeIcon icon={faLock} />
                    </a>
                    <input
                        className="password"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                </div>

                <div className="buttonsBlackLoginPage">
                    <div
                        id="login"
                        className="buttonLogin"
                        onClick={this.login}
                    >
                        <a>Login</a>
                    </div>
                    <div
                        id="anony"
                        className="buttonLogin"
                        onClick={this.login}
                    >
                        <a>Anonymous</a>
                    </div>
                </div>

                <Link to="/new-user-page" className="newUser">
                    <a className="newUserIcon" onClick={this.props.newUser}>
                        <FontAwesomeIcon icon={faUserPlus} /> New to PythonTest?
                        SIGN UP
                    </a>
                </Link>
            </div>
        );
    }
}
