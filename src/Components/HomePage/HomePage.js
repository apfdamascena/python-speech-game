import React, { Component } from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
class HomePage extends Component {
    render() {
        return (
            <div>
                <Logo/>
                <Button name="PLAY"/>
            </div>
        );
    }
}

export default HomePage;