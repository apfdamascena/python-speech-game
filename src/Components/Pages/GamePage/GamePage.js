import React, { Component } from 'react';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import Answer from '../../helpComponents/Answer/Answer';
import RecordButton from '../../helpComponents/RecordButton/RecordButton';
import './GamePage';
import Title from '../../helpComponents/Title/Title';
import SharedButtons from '../../helpComponents/SharedButtons/SharedButtons';
import './responsive.css';

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        }
    }

    // getScore = () => {
    //     let user = firebase.auth().currentUser;
    //     if (!user.isAnonymous) {
    //         firebase.firestore(fire).collection("users").doc(user.uid).get().then(doc => {
    //             if (!doc.exists) {
    //                 console.log("dont't exist");
    //             } else {
    //                 let object = doc.data();
    //                 this.setState({ score: object.score });
    //             }
    //         })
    //     }
    // }

    // componentWillMount() {
    //     this.props.didTapNext();
    //     this.getScore();
    // }

    render() {
        return (
            <div className="containerGamePage">
                <div className="buttonsGamePage">
                    <OrangeButton action="GO BACK" idButton="leftOrangeButtonGamePage" handleButtonPressed={this.props.didTapGoBackOption} />
                    <OrangeButton id="next" action={"SCORE: " + this.state.score} idButton="rightOrangeButtonGamePage" handleButtonPressed = {this.props.didTapRanking}/>
                </div>
                <Title name={this.props.name}></Title>
                <div id="containerGamePageCenter">
                    <Answer
                        content={this.props.content}
                        question={this.props.question}
                    />
                    <SharedButtons/>
                    <RecordButton handleButtonPressedSubmit = {this.props.didTapNext}/>
                </div>
            </div>
        );
    }
}

export default GamePage;