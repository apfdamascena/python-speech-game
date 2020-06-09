import React, { Component } from 'react';
import './RecordButton.css'

class RecordButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            isRecording: false
        }
    }
    switchButton = () => {
        this.setState({isRecording:!this.state.isRecording});
        this.props.handleButtonPressed(this.state.isRecording);
    };
    render(){
        return(
            <div className="recordClass">
                <button 
                className={this.state.isRecording?"Rec":"notRec"}
                id="recButton"
                onClick={this.switchButton}>
                </button>
                <div className="record">
                    <h2 id = "pharseRecord">{this.state.isRecording? "RECORDING" : "RECORDER"}</h2>
                </div>   
            </div>
        );
    }
}

export default RecordButton;