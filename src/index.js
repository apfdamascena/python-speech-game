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
    "CLASSES": ['classe1','classe2'],
    "STRUCTURES": ['structures1','structers2'],
    "CONTROL FLOW": ['alsdjasldasld','fflhsdjkfhsfk'],
    "FUNCTIONS": ['kkkkkkkkkkk','10']
}

class App extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            appState: STATE.HomePage,
            choosenState: ""
        }
    }

    didTapPlayButton = () => {
        this.setState({appState:STATE.OptionPage});
    }

    didChooseSection = (section) => {
        this.setState({appState:STATE.GamePage, choosenState:section});
    }

    maybeRenderHomePage(){
        if(this.state.appState == STATE.HomePage){
            return(
                <div>
                    <HomePage didTapPlayButton={this.didTapPlayButton}/>
                </div>
            );
        }
    }

    maybeRenderOptionPage(){
        if(this.state.appState == STATE.OptionPage){
            return(
                <div>
                    <OptionPage didTapSection={this.didChooseSection}/>
                </div>
            );
        }
    }
    maybeRenderGamePage(){
        if(this.state.appState == STATE.GamePage){
            return(
                <div>
                    <GamePage data={DATA[this.state.choosenState]}></GamePage>
                </div>
            );
        }
    }
    render() {
        return (
            <div>
                {this.maybeRenderHomePage()}
                {this.maybeRenderOptionPage()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);