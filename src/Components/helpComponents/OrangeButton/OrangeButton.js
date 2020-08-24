import React, { Component } from 'react';
import './OrangeButton.css'
import './responsive.css';

class OrangeButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a className="OrangeButton" id={this.props.idButton} onClick={this.props.onClick}><span><span>{this.props.action}</span></span></a>
        );
    }
}

export default OrangeButton;