import React, { Component } from 'react';
import Button from '../../helpComponents/Button/Button';
import Logo from '../../helpComponents/Logo/Logo';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div className = "containerHomePage">
                <Logo/>
                <Button name="PLAY" handleButtonPressed={this.props.didTapPlayButton}/>
            </div>
        );
    }
}

export default HomePage;