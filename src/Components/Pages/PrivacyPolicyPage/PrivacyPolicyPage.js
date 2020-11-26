import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import imageCharacter from '../../../assets/images/personagem.png';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import './PrivacyPolicy.css';

export default class PrivacyPolicyPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            url : this.props.location.state,
            redirect: ''
        }
    }

    handleButtonGoBackPressed = () => {
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
                    <div id="contentAbout2">
                        <div id="text">
                        <h4>Understand the types of information that is collected when you use our services:</h4>

                        <p>Accounts created:</p>
                        <p id="box-inside">-When creating an account on the site, you provide us with personal information that includes your email, name and a password. Later, this information allows us to create resources, such as: ranking, scores and levels reached on the platform.</p>

                        <p>Information we collect when you use our services:</p>
                        <p id="box-inside" > -voice and audio information when you use audio features.<br/>
                            - Information on activities carried out on the website.
                        
                        </p>
  

                        <p>Why do we collect this data?</p>

                        <p id="box-inside">
                        - The audios will be used, exclusively, for a research of scientific initiation, which has the objective of programming by voice. We do not have the identification of the people who sent the audio, let alone use them for other purposes. Thus, we just want to build a large database that allows for the continuation of this research.<br/>
                        - We collect other information, such as: how many times a person contributed to our database, in order to build a ranking and have ways of encouraging user engagement on the platform.
                        </p>
                        </div>
                    </div>
                    <img id="imageChar" src={imageCharacter} alt="character" />
                </div>
            </div>
        );
    }

}