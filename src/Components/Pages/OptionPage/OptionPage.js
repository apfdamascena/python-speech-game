/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';

import Button from '../../helpComponents/Button/Button';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import CharacterLeft from './personagem_left.png';

import './OptionPage.css';
import './responsive.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ButtonOff from '../../helpComponents/ButtonOff/ButtonOff';

class OptionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
            user: this.props.location.state,
        };
    }

    handleClick = (event) => {
        event.persist();
        const { user } = this.state;
        const { uid } = user;
        this.setState({
            redirect: `/level-page/${uid}/${event.target.textContent}`,
        });
    };

    changePage = () => {
        this.setState({ redirect: '/login-page' });
    };

    didTapGoBack = () => {
        confirmAlert({
            title: 'Confirm to exit the game.',
            message: 'Are you sure?',
            buttons: [
                { label: 'Yes', onClick: () => this.changePage() },
                { label: 'No', onClick: () => console.log("don't want") },
            ],
        });
    };

    render() {
        const { redirect, user } = this.state;
        if (redirect) {
            return (
                <Redirect
                    to={{
                        pathname: redirect,
                        state: user,
                    }}
                />
            );
        }

        return (
            <div className="containerOptionPage">
                <OrangeButton action="HOME" onClick={this.didTapGoBack} />
                <img id="photo" src={CharacterLeft} alt="character" />

                <div className="ButtonsOptions">
                    <ButtonOff name="EXPRESSIONS" id="first" />
                    <Button
                        name="FUNCTIONS"
                        id="second"
                        onClick={this.handleClick}
                    />
                    <ButtonOff name="CONDITIONALS" id="third" />
                    <ButtonOff name="STATEMENTS" id="four" />
                </div>
            </div>
        );
    }
}

export default OptionPage;
