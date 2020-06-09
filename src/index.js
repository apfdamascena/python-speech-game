import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './Components/HomePage/HomePage'
import OptionPage from './Components/OptionPage/OptionPage';
import GamePage from './Components/GamePage/GamePage';
import data from './dataJSON';
import LoginPage from './Components/LoginPage/LoginPage';
import NewUserPage from './Components/NewUserPage/NewUserPage';
import './Utils/Utils';
import Recorder from './Components/RecordButton/recorder'


const STATE = {
    HomePage: 0,
    LoginPage: 1,
    OptionPage: 2,
    GamePage: 3,
    NewUser: 4
}

const DATA = data
const ASK = {
    "CLASSES": "ARE YOU ABLE TO IMPLEMENT?",
    "STRUCTURES": "RECORD WHILE YOU READ:",
    "CONTROL FLOW": "ARE YOU ABLE TO IMPLEMENT?",
    "FUNCTIONS": "   HOW WOULD YOU IMPLEMENT?"
}

class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.numberAsk = 0;
        this.state = {
            appState: STATE.HomePage,
            choosenState: ""
        }
    }

    getRandomNumber = (min,max) => {
        return parseInt(Math.random()*(max-min)+min);
    }

    createDownloadLink = (blob) => {
        let url = URL.createObjectURL(blob);
	    let au = document.createElement('audio');
	    let li = document.createElement('li');
	    let link = document.createElement('a');
	    let filename = new Date().toISOString();
        
        au.controls = true;
	    au.src = url;
	    link.href = url;
	    link.download = filename+".wav"; 
	    link.innerHTML = "Save";
	    link.style.color = "white";

	    li.appendChild(au);	
	    li.appendChild(link);
	
	    //upload link
	    let upload = document.createElement('a');
    
        upload.style.color = "white"
	    upload.innerHTML = "Upload";
	    upload.href="#";

	    upload.addEventListener("click", function(event){
		    var xhr=new XMLHttpRequest();
		    xhr.onload=function(e) {
		        if(this.readyState === 4) {
		            console.log("Server returned: ",e.target.responseText);
		        }
		    };
		    var fd=new FormData();
		    fd.append("audio_data",blob, filename);
		    xhr.open("POST","upload.php",true);
		    xhr.send(fd);
	    });
	    li.appendChild(document.createTextNode (" "))//add a space in between
	    li.appendChild(upload)//add the upload link to li

	    recordingsList.appendChild(li);
    }

    startingRecording = (isRecording) => {
        if(isRecording){
            let constraints = { audio: true, video:false};
            navigator.mediaDevices.getUserMedia(constraints).then(function(stream){
                audioContext = new AudioContext();
                gumStream = stream;
                input = audioContext.createMediaStreamSource(stream);
                rec = new Recorder(input,{numChannels:1})
                rec.record();
            });
        } else {
            rec.stop();
            gumStream.getAudioTracks()[0].stop();
            rec.exportWAV(this.createDownloadLink);
        }
    }

    didTapNext = () => {
        this.numberAsk = this.getRandomNumber(0,DATA[this.state.choosenState].length);
        this.setState({appState: STATE.GamePage});
    }

    didTapPlayButton = () => {
        this.setState({appState: STATE.LoginPage});
    }

    didTapLoginButton = () => {
        this.setState({appState: STATE.OptionPage});
    }

    didTapGoBackOption = () => {
        this.setState({appState: STATE.OptionPage});
    }

    didChooseSection = (section) => {
        this.setState({appState: STATE.GamePage, choosenState: section});
    }

    didTapGoBack = () => {
        this.setState({appState: STATE.HomePage});
    }

    didTapGoBackLogin = () => {
        this.setState({appState: STATE.LoginPage});
    }

    createNewUser = () => {
        this.setState({appState: STATE.NewUser});
    }
    didTapGoBackLogin = () =>{
        this.setState({appState: STATE.LoginPage});
    }

    maybeRenderHomePage() {
        if (this.state.appState == STATE.HomePage){
            return (
                <div>
                    <HomePage didTapPlayButton={this.didTapPlayButton}/>
                </div>
            );
        }
    }

    maybeRenderNewUserPage(){
        if(this.state.appState == STATE.NewUser){
            return(
                <div>
                    <NewUserPage didTapGoBackLogin = {this.didTapGoBackLogin}/>
                </div>
            );
        }
    }

    maybeRenderLoginPage(){
        if(this.state.appState == STATE.LoginPage){
            return(
                <div>
                    <LoginPage didTapLoginButton={this.didTapLoginButton}
                    createNewUser={this.createNewUser}
                    didTapGoBack={this.didTapGoBack}
                    />
                </div>
            );
        }
    }

    maybeRenderOptionPage() {
        if (this.state.appState == STATE.OptionPage){
            return (
                <div>
                    <OptionPage didTapSection={this.didChooseSection} didTapGoBack={this.didTapGoBack}/>
                </div>
            );
        }
    }

    maybeRenderGamePage() {
        if (this.state.appState == STATE.GamePage) {
            return (
                <div>
                    <GamePage
                    content = {DATA[this.state.choosenState][this.numberAsk]}
                    question={ASK[this.state.choosenState]}
                    name={this.state.choosenState}
                    data={DATA[this.state.choosenState]} 
                    startingRecording={this.startingRecording}
                    didTapGoBackOption={this.didTapGoBackOption}
                    didTapNext={this.didTapNext}>
                    </GamePage>
                </div>
            );
        }
    }
    
    render() {
        return (
            <div>
                {this.maybeRenderHomePage()}
                {this.maybeRenderLoginPage()}
                {this.maybeRenderNewUserPage()}
                {this.maybeRenderOptionPage()}
                {this.maybeRenderGamePage()}
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);