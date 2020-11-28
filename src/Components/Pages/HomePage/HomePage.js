/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../helpComponents/Button/Button';
import Logo from '../../helpComponents/Logo/Logo';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="containerHomePage">
                <Logo />
                <Link to="/login-page">
                    <Button
                        name="START"
                        handleButtonPressed={this.props.didTapPlayButton}
                    />
                </Link>
            </div>
        );
    }
}

export default HomePage;
