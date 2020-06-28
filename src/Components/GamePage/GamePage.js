import React, { Component } from 'react';
import OrangeButton from '../OrangeButton/OrangeButton';
import Answer from '../Answer/Answer';
import RecordButton from '../RecordButton/RecordButton';
import './GamePage';
import NextButton from '../NextButton/NextButton';
import Title from '../Title/Title';
import firebase from 'firebase';
import fire from '../../FireBase/FireBase';


class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
    }

    getScore = () => {
        let user = firebase.auth().currentUser;
        if (!user.isAnonymous) {
            firebase.firestore(fire).collection("users").doc(user.uid).get().then(doc => {
                if (!doc.exists) {
                    console.log("dont't exist");
                } else {
                    let object = doc.data();
                    this.setState({ score: object.score });
                }
            })
        }
    }

    componentDidMount() {
        this.getScore();
    }

    render() {
        return (
            <div>
                <div className="containerGamePage">
                    <OrangeButton action="GO BACK" idButton="leftOrangeButton" handleButtonPressed={this.props.didTapGoBackOption} />
                    <OrangeButton id="next" action={"SCORE: " + this.state.score} idButton="rightOrangeButton" />
                    <div id="title">
                        <Title name={this.props.name}></Title>
                    </div>
                    <Answer
                        content={this.props.content}
                        question={this.props.question}
                    />
                    <NextButton action="Next" handleButtonPressed={this.props.didTapNext} />
                    <RecordButton handleButtonPressed={this.getScore()} />
                </div>
            </div>
        );
    }
}

export default GamePage;