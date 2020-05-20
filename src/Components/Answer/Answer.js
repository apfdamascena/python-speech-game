import React, { Component } from 'react';
import './Answer.css';
import '../OrangeButton/OrangeButton.js'
import AnswerImage from './ansp.png';
import OrangeButton from '../OrangeButton/OrangeButton.js';

class Answer extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div className="answer">
                <div id= "container">
                    <img className="imageans" src={AnswerImage}/>
                    <figcaption id="figcap">{this.props.title}</figcaption>
                </div>
        
                <div className="record">
                    <h2 id = "pharseRecord">{this.props.statusRecord}</h2>
                </div>
                <div id="recordingsList"></div>
            </div>
        );
    }
}

export default Answer;