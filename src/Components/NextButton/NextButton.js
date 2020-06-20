import React, { Component } from 'react';
import './NextButton.css';

class NextButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <a className="NextButton" onClick={this.props.handleButtonPressed}><span><span>{this.props.action}</span></span></a>
        );
    }
}

export default NextButton;