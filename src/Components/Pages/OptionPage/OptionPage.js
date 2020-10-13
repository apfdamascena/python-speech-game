import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';

import Button from '../../helpComponents/Button/Button';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import CharacterLeft from './personagem_left.png';

import './OptionPage.css';
import './responsive.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ButtonOff from '../../helpComponents/ButtonOff/ButtonOff';

class OptionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect : "",
            user : this.props.location.state,
        }
    }

    handleClick = (event) => {
        event.persist();
        this.setState({redirect: `/level-page/${this.state.user.uid}/${event.target.textContent}`});
    }

    changePage = () => {
        this.setState({redirect: "/login-page"})
    }

    didTapGoBack = () => {
        confirmAlert({
            title: 'Confirm to exit the game.',
            message: 'Are you sure?',
            buttons: [
              { label: 'Yes',
                onClick: () => this.changePage()
              },
              { label: 'No',
                onClick: () => console.log("don't want")}]
        });
    }

    render() {
        if(this.state.redirect){
            return(
                <Redirect to = {{
                    pathname: this.state.redirect,
                    state: this.state.user,
                }}/>
            );
        } 

        return (
            <div className = "containerOptionPage">
                <OrangeButton action="HOME" onClick={this.didTapGoBack}></OrangeButton>
                <img id="photo" src={CharacterLeft} alt = "character"/>

                <div className="ButtonsOptions">
                    <ButtonOff name="EXPRESSIONS" id="first" /> 
                    <Button name="FUNCTIONS" id="second" onClick = {this.handleClick} />
                    <ButtonOff name="CONDITIONAL" id="third"/>
                    <ButtonOff name="STATEMENTS" id="four" />
                </div>
            </div>
        );
    }
}

export default OptionPage;