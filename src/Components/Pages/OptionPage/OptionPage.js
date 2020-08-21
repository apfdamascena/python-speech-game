import React, { Component } from 'react';
import Button from '../../helpComponents/Button/Button';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import CharacterLeft from './personagem_left.png';
import './OptionPage.css';
import './responsive.css';

class OptionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : ""
        }
    }

    handleClick = (event) => {
        event.persist();
        console.log(event);
        console.log(event.target.textContent)
    }

    render() {
        return (
            <div className = "containerOptionPage">
                <OrangeButton action="HOME" handleButtonPressed={this.props.didTapGoBack}></OrangeButton>
                <img id="photo" src={CharacterLeft} />

                <div className="ButtonsOptions">
                    <Button name="CONTROL FLOW" id="first" handleButtonPressed={this.props.didTapSection} />
                    <Button name="FUNCTIONS" id="second" onClick = {this.handleClick} />
                    <Button name="STRUCTURES" id="third" handleButtonPressed={this.props.didTapSection} />
                    <Button name="CLASSES" id="four" handleButtonPressed={this.props.didTapSection} />
                </div>
            </div>
        );
    }
}

export default OptionPage;