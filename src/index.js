import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './Components/HomePage/HomePage'
import OptionPage from './Components/OptionPage/OptionPage';

const STATE = {
    HomePage: 0,
    OptionPage: 1
}

class App extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            appState: STATE.HomePage
        }
    }
    didTapPlayButton = () => {
        this.setState({appState:STATE.OptionPage})
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
                    <OptionPage/>
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