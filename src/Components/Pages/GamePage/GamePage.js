import React, { Component } from 'react';
import API from '../../../services/API';
import { Redirect } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import Answer from '../../helpComponents/Answer/Answer';
import RecordButton from '../../helpComponents/RecordButton/RecordButton';
import Title from '../../helpComponents/Title/Title';
import SharedButtons from '../../helpComponents/SharedButtons/SharedButtons';
import getName from '../../../utils/name';
import 'react-notifications/lib/notifications.css';

import './responsive.css';

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            data: "",
            ask: "",
            user: this.props.location.state,
            name: getName(window.location.pathname),
            randomNumber: 0,
            askNumber: 0,
            redirect: ""
        }
    }

    getRandomNumber = (min, max) => { return parseInt(Math.random() * (max - min) + min); }

    componentDidMount() {
        API.get(window.location.pathname).then((response) => {
            const { SIGNATURE, score, ASK } = response.data;
            this.setState({ data: SIGNATURE.SIGNATURE, score: score, ask: ASK.ASK });
        }).catch((error) => { console.log(error) });
        this.setState({
            randomNumber: this.getRandomNumber(0, this.state.data.length),
            askNumber: this.getRandomNumber(0, this.state.ask)
        })
        this.showInfo(this.state.name);

    }

    showInfo = (optionChosen) => {
        let phrase = "";
        switch(optionChosen){
            case 'FUNCTIONS':
                console.log(30);
                phrase = `if def sum (a, b) appears, the audio should be "define a function called sum with parameters a and b"
                            or ANYTHING LIKE THIS`;
                break;
        }
        NotificationManager.info(phrase);

    }

    getScore = () => {
        API.get(window.location.pathname).then((response) => {
            const { score } = response.data;
            this.setState({ score: score })
        })
    }

    handleChangePage = () => {
        this.setState({ redirect: "/ranking-page" });
    }

    handleGoBack = () => {
        this.setState({redirect: `/option-page/${this.state.user.uid}`})
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={{
                    pathname: this.state.redirect,
                    state: this.state.user
                }} />
            );
        }

        return (
            <div className="containerGamePage">
                <NotificationContainer/>
                <div className="buttonsGamePage">
                    <OrangeButton action="GO BACK" idButton="leftOrangeButtonGamePage" onClick = {this.handleGoBack}/>
                    <OrangeButton id="next" action={"SCORE: " + this.state.score} idButton="rightOrangeButtonGamePage" onClick= {this.handleChangePage}/>
                </div>
                <Title name={this.state.name}></Title>
                <div id="containerGamePageCenter">
                    <Answer
                        content={this.state.data[this.state.randomNumber]}
                        question={this.state.ask[this.state.askNumber]}
                    />
                    <SharedButtons score = {this.state.score} />
                    <RecordButton user={this.state.user} score={this.getScore} />
                </div>
            </div>
        );
    }
}

export default GamePage;