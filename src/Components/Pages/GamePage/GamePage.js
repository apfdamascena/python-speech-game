import React, { Component } from 'react';
import API from '../../../services/API';
import { Link } from 'react-router-dom';

import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import Answer from '../../helpComponents/Answer/Answer';
import RecordButton from '../../helpComponents/RecordButton/RecordButton';
import Title from '../../helpComponents/Title/Title';
import SharedButtons from '../../helpComponents/SharedButtons/SharedButtons';
import getName from '../../../utils/name';

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
            askNumber: 0
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
    }

    getScore = () => {
        API.get(window.location.pathname).then((response) => {
            const {score} = response.data;
            this.setState({score: score})
        })
    }

    render() {
        return (
            <div className="containerGamePage">
                <div className="buttonsGamePage">
                    <OrangeButton action="GO BACK" idButton="leftOrangeButtonGamePage"/>
                    <Link to = "/ranking-page">
                        <OrangeButton id="next" action={"SCORE: " + this.state.score} idButton="rightOrangeButtonGamePage"/>
                    </Link>
                </div>
                <Title name={this.state.name}></Title>
                <div id="containerGamePageCenter">
                    <Answer
                        content={this.state.data[this.state.randomNumber]}
                        question={this.state.ask[this.state.askNumber]}
                    />
                    <SharedButtons />
                    <RecordButton user={this.state.user} score = {this.getScore}/>
                </div>
            </div>
        );
    }
}

export default GamePage;