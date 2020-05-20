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
                <OrangeButton action="NEXT" idButton="rightOrangeButton"/>
                <Answer title={this.props.name} statusRecord="RECORDER"/>
                <RecordButton handleButtonPressed={this.props.startingRecording}/>
            </div>
        );
    }
}

export default GamePage;