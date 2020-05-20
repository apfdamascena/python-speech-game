import React, { Component } from 'react';
import Button from '../Button/Button';
import OrangeButton from '../OrangeButton/OrangeButton';

class OptionPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <OrangeButton action="GO BACK" handleButtonPressed={this.props.didTapGoBack}/>
                <Button name="CONTROL FLOW" id="first" handleButtonPressed={this.props.didTapSection}/>
                <Button name="FUNCTIONS" id="second" handleButtonPressed={this.props.didTapSection}/>
                <Button name="STRUCTURES" id="third" handleButtonPressed={this.props.didTapSection}/>
                <Button name="CLASSES" id="four" handleButtonPressed={this.props.didTapSection}/>
            </div>
        );
    }
}

export default OptionPage;