import React, { Component } from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div>
                <Logo/>
                <Button name="PLAY" handleButtonPressed={this.props.didTapPlayButton}/>
            </div>
        );
    }
}

export default HomePage;