import React, { Component } from 'react';
import OrangeButton from '../OrangeButton/OrangeButton';
import Answer from '../Answer/Answer';
import RecordButton from '../RecordButton/RecordButton';


class GamePage extends Component {
    constructor(props){
        super(props);
    }
    getDivElement(element){
        return(
            <div>
                {element}
            </div>
        );
    }
    render() {
        return (
            <div>
                <OrangeButton action="GO BACK" idButton="leftOrangeButton" handleButtonPressedGoBack={this.props.didTapGoBackOption}/>
                <OrangeButton action="NEXT" idButton="rightOrangeButton"/>
                <Answer title="FUNCTIONS" statusRecord="RECORDER"/>
                <RecordButton handleButtonPressed={this.props.startingRecording}/>
            </div>
        );
    }
}

export default GamePage;