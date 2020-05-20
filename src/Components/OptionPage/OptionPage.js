import React, { Component } from 'react';
import Button from '../Button/Button';

class OptionPage extends Component {
    render() {
        return (
            <div>
                <Button name="CONTROL FLOW" id="first"/>
                <Button name="FUNCTIONS" id="second"/>
                <Button name="STRUCTURES" id="third"/>
                <Button name="CLASSES" id="four"/>
            </div>
        );
    }
}

export default OptionPage;