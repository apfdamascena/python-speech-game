import React, { Component } from 'react';
import './NextButton.css';
import './responsive.css';

class NextButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className= "containerNextButton">
                <a className="NextButton" onClick={this.props.handleButtonPressed}><span><span>{this.props.action}</span></span></a>
            </div>
        );
    }
}

export default NextButton;