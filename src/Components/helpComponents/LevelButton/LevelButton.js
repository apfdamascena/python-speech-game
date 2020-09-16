import React, { Component } from 'react';
import './LevelButton.css';

export default class LevelButton extends Component {
    render() {
        return (
            <div className="containerTitle">
                <a id="cta2" href="#" disabled = {this.props.disabled}>
                    <span>{this.props.level}</span>
                    <span>
                        <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            xlinkHref="http://www.w3.org/1999/xlink">
                        </svg>
                    </span>
                </a>
            </div>
        );
    }
}