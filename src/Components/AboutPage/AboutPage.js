import React, {Component} from 'react';
import './AboutPage.css';
import imageCharacter from './personagem.png';
import OrangeButton from '../OrangeButton/OrangeButton';

class AboutPage extends Component {
    render(){
        return(
            <div id="boxAbout">
                <OrangeButton action="GO BACK" handleButtonPressed = {this.props.didTapBackLogin}/>
                <div id="contentAbout"></div>
                <img id="imageChar" src={imageCharacter}/>
            </div>
        );
    }
}

export default AboutPage;