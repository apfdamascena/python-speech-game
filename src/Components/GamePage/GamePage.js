import React, { Component } from 'react';
import OrangeButton from '../OrangeButton/OrangeButton';
import Answer from '../Answer/Answer';
import RecordButton from '../RecordButton/RecordButton';
import './GamePage';
import NextButton from '../NextButton/NextButton';
import Title from '../Title/Title';


class GamePage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <OrangeButton action="GO BACK" idButton="leftOrangeButton" handleButtonPressed={this.props.didTapGoBackOption}/>
                <OrangeButton id = "next" action="Next" idButton="rightOrangeButton" handleButtonPressed={this.props.didTapNext}/>
                <NextButton action="Next" handleButtonPressed = {this.props.didTapNext}/>
                <Answer
                content={this.props.content}
                question={this.props.question}
                />
                <RecordButton/>
                <div id="title">
                    <Title name = {this.props.name}></Title>
                </div>
            </div>
        );
    }
}

export default GamePage;