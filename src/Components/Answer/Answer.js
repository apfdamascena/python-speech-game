import React, { Component } from 'react';
import './Answer.css';
import '../OrangeButton/OrangeButton.js';
import character from './personagem.png';

class Answer extends Component {
    constructor(props) {
        super(props);
    }
    // this.props.title
    render() {
        return (
            <div className="answer">
                <div id="box"></div>
                <p id="figcap">{this.props.title}</p>
                <p id="question">{this.props.question}</p>
                <p id="content">{this.props.content}</p>
                <img id="imageCharacter"src={character}/>
            </div>
        );
    }
}

export default Answer;