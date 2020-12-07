/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import imageCharacter from '../../../assets/images/personagem.png';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import './AboutPage.css';
import './responsive.css';

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: '',
        };
    }

    handleChangePage = () => {
        this.setState({ redirect: '/login-page' });
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
                    onClick={this.handleChangePage}
                />
                <div className="mainBox">
                    <div id="contentAbout">
                        <div id="text">
                            <p>Goal of this site:</p>
                            <p>
                                We are researchers who want to teach a computer
                                to program based on voice commands from a
                                developer. To reach that goal, we need to
                                collect a lot of information about how
                                programmers would instruct the computer to code.
                                Can you help us in this task?
                            </p>
                            <p>
                                It is easy to help: Create an account or enter
                                anonymously, select a python option, for example
                                'functions', and the screen will show a
                                sentence. Record your voice while you read the
                                sentence and submit. Do this as many times as
                                you can. Instructors who teach the computer more
                                will appear higher in the rankings!
                            </p>
                        </div>
                    </div>
                    <img id="imageChar" src={imageCharacter} alt="character" />
                </div>
            </div>
        );
    }
}

export default AboutPage;
