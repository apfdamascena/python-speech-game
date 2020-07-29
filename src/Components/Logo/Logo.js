import React, { Component } from 'react';
import './Logo.css';
import logoImage from './logo.png';

class Logo extends Component {
    render() {
        return (
            <div className="containerLogo">
                <div className="image">
                    <img src={logoImage} alt="logo"/>
                </div>

                <div className="namelogo">
                    <h1>PythonTest</h1>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default Logo;