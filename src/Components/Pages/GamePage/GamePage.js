import React, { Component } from 'react';
import API from '../../../services/API';

import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import Answer from '../../helpComponents/Answer/Answer';
import RecordButton from '../../helpComponents/RecordButton/RecordButton';
import Title from '../../helpComponents/Title/Title';
import SharedButtons from '../../helpComponents/SharedButtons/SharedButtons';

import './responsive.css';

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            data: "",
            ask: "",
            name : this.props.location.name,
            user: this.props.location.state,
            randomNumber: 0,
            askNumber: 0
        }
    }

    getRandomNumber = (min, max) => { return parseInt(Math.random() * (max-min) + min); }

    componentDidMount() {
        API.get(window.location.pathname).then((response) => {
            const {SIGNATURE, score, ASK} = response.data;
            this.setState({data: SIGNATURE.SIGNATURE, score: score, ask: ASK.ASK});
        }).catch((error) => { console.log(error)});
        this.setState({randomNumber: this.getRandomNumber(0, this.state.data.length),
                    askNumber: this.getRandomNumber(0, this.state.ask)})
    }

    render() {
        return (
            <div className="containerGamePage">
                <div className="buttonsGamePage">
                    <OrangeButton action="GO BACK" idButton="leftOrangeButtonGamePage" handleButtonPressed={this.props.didTapGoBackOption} />
                    <OrangeButton id="next" action={"SCORE: " + this.state.score} idButton="rightOrangeButtonGamePage" handleButtonPressed = {this.props.didTapRanking}/>
                </div>
                <Title name={this.state.name}></Title>
                <div id="containerGamePageCenter">
                    <Answer
                        content={this.state.data[this.state.randomNumber]}
                        question={this.state.ask[this.state.askNumber]}
                    />
                    <SharedButtons/>
                    <RecordButton handleButtonPressedSubmit = {this.props.didTapNext}/>
                </div>
            </div>
        );
    }
}

export default GamePage;