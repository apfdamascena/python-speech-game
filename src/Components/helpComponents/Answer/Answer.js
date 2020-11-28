/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './Answer.css';
import '../OrangeButton/OrangeButton';
import character from '../../../assets/images/personagem.png';
import './responsive.css';

class Answer extends Component {
    render() {
        return (
            <div className="answer">
                <div id="box">
                    <p id="question">{this.props.question}</p>
                    <p id="content">{this.props.content}</p>
                </div>
                <div className="imageCharacter">
                    <img id="imageCharacter" src={character} alt="astraunaut" />
                </div>
            </div>
        );
    }
}

export default Answer;
