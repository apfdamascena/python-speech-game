import React, { Component } from 'react';
import OrangeButton from '../OrangeButton/OrangeButton';
import Answer from '../Answer/Answer';
import RecordButton from '../RecordButton/RecordButton';


class GamePage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <OrangeButton action="GO BACK" idButton="leftOrangeButton" handleButtonPressed={this.props.didTapGoBackOption}/>
                <OrangeButton action="NEXT" idButton="rightOrangeButton" handleButtonPressed={this.props.didTapNext}/>
                <Answer
                content={this.props.content}
                question={this.props.question}
                title={this.props.name}
                />
                <RecordButton handleButtonPressed={this.props.startingRecording}/>
            </div>
        );
    }
}

export default GamePage;