import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './Components/HomePage/HomePage'


class App extends Component {
    didTapPlayButton(){
        console.log("oi")
    }
    render() {
        return (
            <div>
                <HomePage didTapPlayButton={this.didTapPlayButton}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);