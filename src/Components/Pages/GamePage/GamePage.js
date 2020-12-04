/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable radix */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
    NotificationContainer,
    NotificationManager,
} from 'react-notifications';
import API from '../../../services/API';

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
            data: '',
            ask: '',
            user: this.props.location.state,
            name: getName(window.location.pathname),
            randomNumber: 0,
            askNumber: 0,
            redirect: '',
        };
    }

    componentDidMount() {
        API.get(window.location.pathname)
            .then((response) => {
                const { SIGNATURE, score, ASK } = response.data;
                this.setState({
                    data: SIGNATURE.SIGNATURE,
                    score,
                    ask: ASK.ASK,
                });
            })
            .catch((error) => {
                console.log(error);
            });
        this.setState({
            randomNumber: this.getRandomNumber(0, this.state.data.length),
            askNumber: this.getRandomNumber(0, this.state.ask.length),
        });
        this.showInfo(this.state.name);
    }

    getRandomNumber = (min, max) => {
        return parseInt(Math.random() * (max - min) + min);
    };

    showInfo = (optionChosen) => {
        let phrase = '';
        switch (optionChosen) {
            case 'FUNCTIONS':
                phrase = `if def sum (a, b) appears, the audio should be "define a function called sum with parameters a and b"`;
                break;
            default:
                phrase = 'not exist';
                break;
        }
        NotificationManager.info(phrase);
    };

    getScore = () => {
        API.get(window.location.pathname).then((response) => {
            const { score } = response.data;
            this.setState({ score });
        });
    };

    changeContent = () => {
        this.setState({
            randomNumber: this.getRandomNumber(0, this.state.data.length),
        });
    };

    handleChangePage = () => {
        this.setState({ redirect: '/ranking-page' });
    };

    handleGoBack = () => {
        const { user } = this.state;
        const { uid } = user;
        this.setState({ redirect: `/option-page/${uid}` });
    };

    render() {
        const { redirect, user } = this.state;
        if (redirect) {
            return (
                <Redirect
                    to={{
                        pathname: redirect,
                        state: user,
                    }}
                />
            );
        }

        return (
            <div className="containerGamePage">
                <NotificationContainer />
                <div className="buttonsGamePage">
                    <OrangeButton
                        action="GO BACK"
                        idButton="leftOrangeButtonGamePage"
                        onClick={this.handleGoBack}
                    />
                    <OrangeButton
                        id="next"
                        action={`SCORE: ${this.state.score}`}
                        idButton="rightOrangeButtonGamePage"
                        onClick={this.handleChangePage}
                    />
                </div>
                <Title name={this.state.name} />
                <div id="containerGamePageCenter">
                    <Answer
                        content={this.state.data[this.state.randomNumber]}
                        question={this.state.ask[this.state.askNumber]}
                    />
                    <SharedButtons score={this.state.score} />
                    <RecordButton
                        user={this.state.user}
                        score={this.getScore}
                        onClick={this.changeContent}
                    />
                </div>
            </div>
        );
    }
}

export default GamePage;
