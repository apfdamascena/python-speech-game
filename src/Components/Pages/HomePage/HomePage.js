import React, { Component } from 'react';
import Button from '../../helpComponents/Button/Button';
import Logo from '../../helpComponents/Logo/Logo';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div className="containerHomePage">
                <Logo />
                <Link to = "/login-page">
                    <Button name="PLAY" handleButtonPressed={this.props.didTapPlayButton} />
                </Link>
            </div>
        );
    }
}

export default HomePage;