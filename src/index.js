import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './Components/HomePage/HomePage'
import OptionPage from './Components/OptionPage/OptionPage';
import GamePage from './Components/GamePage/GamePage';
import data from './dataJSON';
import LoginPage from './Components/LoginPage/LoginPage';
import NewUserPage from './Components/NewUserPage/NewUserPage';


const STATE = {
    HomePage: 0,
    LoginPage: 1,
    OptionPage: 2,
    GamePage: 3,
    NewUser: 4
}

const DATA = data
const ASK = {
    "CLASSES": "ARE YOU ABLE TO IMPLEMENT?",
    "STRUCTURES": "RECORD WHILE YOU READ:",
    "CONTROL FLOW": "ARE YOU ABLE TO IMPLEMENT?",
    "FUNCTIONS": "   HOW WOULD YOU IMPLEMENT?"
}

class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.numberAsk = 0;
        this.state = {
            appState: STATE.HomePage,
            choosenState: ""
        }
    }

    getRandomNumber = (min,max) => {
        return parseInt(Math.random()*(max-min)+min);
    }

    startingRecording = () => {
        var audio = document.createElement('audio');
        var recordList = document.getElementById('recordingsList');
        audio.controls = true;
        recordList.appendChild(audio);
        console.log(recordList);
        //terminar e colocar na tela!!!!!
    }

    didTapNext = () => {
        document.getElementById('recordingsList').removeChild('audio');
        this.numberAsk = this.getRandomNumber(0,DATA[this.state.choosenState].length);
        this.setState({appState: STATE.GamePage});
    }

    didTapPlayButton = () => {
        this.setState({appState: STATE.LoginPage});
    }

    didTapLoginButton = () => {
        this.setState({appState: STATE.OptionPage});
    }

    didTapGoBackOption = () => {
        this.setState({appState: STATE.OptionPage})
    }

    didChooseSection = (section) => {
        this.setState({appState: STATE.GamePage, choosenState: section});
    }

    didTapGoBack = () => {
        this.setState({appState: STATE.HomePage})
    }

    createNewUser = () => {
        this.setState({appState: STATE.NewUser});
    }

    maybeRenderHomePage() {
        if (this.state.appState == STATE.HomePage){
            return (
                <div>
                    <HomePage didTapPlayButton={this.didTapPlayButton}/>
                </div>
            );
        }
    }

    maybeRenderNewUserPage(){
        if(this.state.appState == STATE.NewUser){
            return(
                <div>
                    <NewUserPage/>
                </div>
            );
        }
    }

    maybeRenderLoginPage(){
        if(this.state.appState == STATE.LoginPage){
            return(
                <div>
                    <LoginPage didTapLoginButton={this.didTapLoginButton}
                    createNewUser = {this.createNewUser}/>
                </div>
            );
        }
    }

    maybeRenderOptionPage() {
        if (this.state.appState == STATE.OptionPage){
            return (
                <div>
                    <OptionPage didTapSection={this.didChooseSection} didTapGoBack={this.didTapGoBack}/>
                </div>
            );
        }
    }

    maybeRenderGamePage() {
        if (this.state.appState == STATE.GamePage) {
            return (
                <div>
                    <GamePage
                    content = {DATA[this.state.choosenState][this.numberAsk]}
                    question={ASK[this.state.choosenState]}
                    name={this.state.choosenState}
                    data={DATA[this.state.choosenState]} 
                    startingRecording={this.startingRecording}
                    didTapGoBackOption={this.didTapGoBackOption}
                    didTapNext={this.didTapNext}>
                    </GamePage>
                </div>
            );
        }
    }
    
    render() {
        return (
            <div>
                {this.maybeRenderHomePage()}
                {this.maybeRenderLoginPage()}
                {this.maybeRenderNewUserPage()}
                {this.maybeRenderOptionPage()}
                {this.maybeRenderGamePage()}
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);