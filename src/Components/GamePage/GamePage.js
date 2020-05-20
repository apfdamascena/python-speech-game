import React, { Component } from 'react';
import OrangeButton from '../OrangeButton/OrangeButton';
import Answer from '../Answer/Answer';


class GamePage extends Component {
    constructor(props){
        super(props);
    }
    getDivElement(element){
        return(
            <div>
                {element}
            </div>
        );
    }
    render() {
        return (
            <div>
                <OrangeButton action="GO BACK" idButton="leftOrangeButton"/>
                <OrangeButton action="NEXT" idButton="rightOrangeButton"/>
                <Answer title="serahein"/>
                {this.props.data.forEach(this.getDivElement)}
            </div>
        );
    }
}

export default GamePage;