import React, { Component } from 'react';


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
                {this.props.data.forEach(this.getDivElement)}
            </div>
        );
    }
}

export default GamePage;