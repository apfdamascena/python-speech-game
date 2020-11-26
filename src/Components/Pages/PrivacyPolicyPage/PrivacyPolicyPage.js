import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import imageCharacter from '../../../assets/images/personagem.png';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';

export default class PrivacyPolicyPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            url : this.props.location.state,
            redirect: ''
        }
    }

    handleButtonGoBackPressed = () => {
        console.log(this.state.url);
        let domain = this.state.url.split('/');
        let goTo = '/' + domain[domain.length-1];
        this.setState({redirect : goTo});
    }



    render(){
        if(this.state.redirect){
            return(
                <Redirect to = {this.state.redirect} />
            );
        }

        return (
            <div id="boxAbout">
                <OrangeButton action="GO BACK" onClick = {this.handleButtonGoBackPressed}/>
                <div className="mainBox">
                    <div id="contentAbout">
                        <div id="text">
                            <p>Purpose:</p>
                            <p>We want to get as much audio as possible to start a search for voice programming in python.
                            So, we will need you to increase our database even further.</p>
                            <p>It's easy to play : Create an account or just log in anonymously, select a python option, for example
                            "functions", and the screen will show a sentence. Record your voice while you read the sentence and submit.</p>
                        </div>
                    </div>
                    <img id="imageChar" src={imageCharacter} alt="character" />
                </div>
            </div>
        );
    }

}