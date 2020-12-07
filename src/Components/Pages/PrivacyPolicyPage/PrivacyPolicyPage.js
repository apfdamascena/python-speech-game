/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import imageCharacter from '../../../assets/images/personagem.png';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import './PrivacyPolicy.css';

export default class PrivacyPolicyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.location.state,
            redirect: '',
        };
    }

    handleButtonGoBackPressed = () => {
        const { url } = this.state;
        const domain = url.split('/');
        const goTo = `/${domain[domain.length - 1]}`;
        this.setState({ redirect: goTo });
    };

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to={redirect} />;
        }

        return (
            <div id="boxAbout">
                <OrangeButton
                    action="GO BACK"
                    onClick={this.handleButtonGoBackPressed}
                />
                <div className="mainBox">
                    <div id="contentAbout2">
                        <div id="text">
                            <h4>
                                The following types of information are collected
                                when you use our services:
                            </h4>

                            <p>Accounts created:</p>
                            <p id="box-inside">
                                - When creating an account on the site, you
                                provide us with personal information that
                                includes your email, user name and a password.
                                The email and the user name allow us to create
                                resources such as: ranking, scores and levels
                                reached on the platform. The password is only
                                used for authentication purposes.
                            </p>

                            <p>
                                Information we collect when you use our
                                services:
                            </p>
                            <p id="box-inside">
                                {' '}
                                - Voice and audio information when you use audio
                                features.
                                <br />
                                Information on activities carried out on the
                                website.
                            </p>

                            <p>Why do we collect this data?</p>

                            <p id="box-inside">
                                - The audio files will be used, exclusively, for
                                research purposes, more specifically, as input
                                to a speech recognition system responsible for
                                translating your voice commands into text and
                                this text is added to a database of commands
                                instructing a program to write code. We do not
                                associate audio files with your identity,not
                                even your email, in any way. We do not use these
                                audio files for other purposes.
                                <br />- - We collect other information, such as:
                                how many times a person contributed to our
                                database, in order to build a ranking and have
                                ways of encouraging user engagement on the
                                platform. However, we do not associate the user
                                with the audio files she has contributed; these
                                are stored anonymously.
                            </p>
                        </div>
                    </div>
                    <img id="imageChar" src={imageCharacter} alt="character" />
                </div>
            </div>
        );
    }
}
