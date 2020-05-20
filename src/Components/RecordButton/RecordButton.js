import React, { Component } from 'react';
import './RecordButton.css'

class RecordButton extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return(
            <div className="recordClass">
                <button id="recButton" onClick={this.props.handleButtonPressed}></button>     
            </div>
        );
    }
}

export default RecordButton;