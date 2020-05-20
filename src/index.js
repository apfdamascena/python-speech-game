import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './Components/Button/Button';


class App extends Component {
    render() {
        return (
            <Button name="PLAY" ></Button>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);