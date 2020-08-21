import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
        this.setState({redirect: `/game-page/${event.target.textContent}`});
    }

    render() {
        if(this.state.redirect){
            return(
                <Redirect to = {this.state.redirect}/>
            );
        }

        return (
            <div className = "containerOptionPage">
                <OrangeButton action="HOME" handleButtonPressed={this.props.didTapGoBack}></OrangeButton>
                <img id="photo" src={CharacterLeft} />

                <div className="ButtonsOptions">
                    <Button name="CONTROL FLOW" id="first" onClick = {this.handleClick} />
                    <Button name="FUNCTIONS" id="second" onClick = {this.handleClick} />
                    <Button name="STRUCTURES" id="third" onClick = {this.handleClick}/>
                    <Button name="CLASSES" id="four" onClick = {this.handleClick} />
                </div>
            </div>
        );
    }
}

export default OptionPage;