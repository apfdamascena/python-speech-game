import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './Components/HomePage/HomePage'


class App extends Component {
    render() {
        return (
            <div>
                <HomePage/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);