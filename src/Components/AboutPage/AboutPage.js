import React, { Component } from 'react';
import './AboutPage.css';
import imageCharacter from './personagem.png';
import OrangeButton from '../OrangeButton/OrangeButton';

class AboutPage extends Component {
    render() {
        return (
            <div id="boxAbout">
                <OrangeButton action="GO BACK" handleButtonPressed={this.props.didTapBackLogin} />
                <div className="mainBox">
                    <div id="contentAbout">
                        <div id="text">
                            <p>Purpose:</p>
                            <p>We want to get as much audio as possible to start a search for voice programming in python.
                                So, we will need you to increase our database even further.</p>
                            <p>It's easy to play : Create an account or just log in anonymously, select a python option, for example
                                "functions", and the screen will show a sentence. Record your voice while you read the sentence and submit.</p>
                        </div>
                    </div>
                    <img id="imageChar" src={imageCharacter} />
                </div>
            </div>
        );
    }
}

export default AboutPage;