/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './OrangeButton.css';
import './responsive.css';

class OrangeButton extends Component {
    render() {
        return (
            <a
                className="OrangeButton"
                id={this.props.idButton}
                onClick={this.props.onClick}
            >
                <span>
                    <span>{this.props.action}</span>
                </span>
            </a>
        );
    }
}

export default OrangeButton;
