import React, { Component } from 'react';
import './ButtonLevel';

class ButtonLevel extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div id={this.props.id} className="ButtonLevel">{this.props.value}</div>
        );
    }
}

export default ButtonLevel;