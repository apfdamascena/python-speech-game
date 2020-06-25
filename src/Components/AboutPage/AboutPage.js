import React, {Component} from 'react';
import './AboutPage.css';
import imageCharacter from './personagem.png';

class AboutPage extends Component {
    render(){
        return(
            <div id="boxAbout">
                <div id="contentAbout"></div>
                <img id="imageChar" src={imageCharacter}/>
            </div>
        );
    }
}

export default AboutPage;