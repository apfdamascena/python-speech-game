import React, { Component } from 'react';
import './Answer.css';
import '../OrangeButton/OrangeButton.js'
import AnswerImage from './ansp.png';

class Answer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="answer">
                <div id= "container">
                    <img className="imageans" src={AnswerImage}/>
                    <p id="figcap">{this.props.title}</p>
                    <p id="question">{this.props.question}</p>
                    <p id="content">{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default Answer;