import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './Components/HomePage/HomePage'
import OptionPage from './Components/OptionPage/OptionPage';
import GamePage from './Components/GamePage/GamePage';

const STATE = {
    HomePage: 0,
    OptionPage: 1,
    GamePage: 2
}
const DATA = {
    "CLASSES": ['classe1', 'classe2'],
    "STRUCTURES": ['structures1', 'structers2'],
    "CONTROL FLOW": ['alsdjasldasld', 'fflhsdjkfhsfk'],
    "FUNCTIONS": ['kkkkkkkkkkk', '10']
}

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

    startingRecording = () => {
        console.log(10); //precisa mudar o botao vermelho, bem como iniciar a gravacao!
    }

    didTapNext = () => {
        this.numberAsk++;
        this.setState({appState: STATE.GamePage});
    }

    didTapPlayButton = () => {
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

    maybeRenderHomePage() {
        if (this.state.appState == STATE.HomePage){
            return (
                <div>
                    <HomePage didTapPlayButton={this.didTapPlayButton} />
                </div>
            );
        }
    }

    maybeRenderOptionPage() {
        if (this.state.appState == STATE.OptionPage){
            return (
                <div>
                    <OptionPage didTapSection={this.didChooseSection} didTapGoBack={this.didTapGoBack} />
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