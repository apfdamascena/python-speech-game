import React, { Component } from 'react';
import './Title.css';
class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a id="cta1" href="#">
                <span>{this.props.name}</span>
                <span>
                    <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xlinkHref="http://www.w3.org/1999/xlink">
                    </svg>
                </span>
            </a>
        );
    }
}

export default Title;