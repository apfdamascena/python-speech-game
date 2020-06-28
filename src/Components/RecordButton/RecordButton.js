import React, { Component } from 'react';
import './RecordButton.css'
import MicRecorder from 'mic-recorder-to-mp3';
import firebase from 'firebase';
import fire from '../../FireBase/FireBase';

const recorder = new MicRecorder({ bitRate: 128 });

class RecordButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRecording: false,
            blobURL: '',
            blob: '',
            isBlocked: false,
            position : '',
            score : 0,
        }
    }

    submit = () => {
        firebase.storage().ref("audios/"+this.state.blobURL).put(this.state.blob).then( (snapshot) => {
            this.setState({blobURL : ''});
            alert("Audio was sent");
            this.state.score += 10;
            let user  = firebase.auth().currentUser;
            if(!user.isAnonymous){
                firebase.firestore(fire).collection("users").doc(user.uid).update({
                    score : this.state.score
                }).catch((error) => console.log(error));
                this.props.handleButtonPressed();
            }
        }).catch((error) => console.log(error));
    }

    start = () => {
        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            recorder.start().then(() => {
                this.setState({ isRecording: true });
            }).catch((error) => console.error(error));
        }
    }

    stop = () => {
        recorder.stop().getMp3().then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob)
            this.setState({blob : blob});
            this.setState({ blobURL, isRecording: false });
        }).catch((error) => console.log(error));
    }

    clear = () => {
        this.setState({blobURL:''});
    }

    getScore = () => {
        let user  = firebase.auth().currentUser;
        if(!user.isAnonymous){
            firebase.firestore(fire).collection("users").doc(user.uid).get().then(doc => {
                if(!doc.exists){
                    console.log("dont't exist");
                } else{
                    let object = doc.data();
                    this.setState({score : object.score});
                }
            })
        }
    }

    componentDidMount() {
        navigator.getUserMedia({ audio: true },
          () => {
            console.log('Permission Granted');
            this.setState({ isBlocked: false});
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({position : position});
            });
          },
          () => {
            console.log('Permission Denied');
            this.setState({ isBlocked: true });
          },
        );
        this.getScore();
    }

    render() {
        return (
            <div className = "containerRecordButton">
                <div className="recordClass">
                    <button
                        className={this.state.isRecording ? "Rec" : "notRec"}
                        id="recButton"
                        onClick={!this.state.isRecording ? this.start : this.stop}></button>
                    <audio id="recording" src={this.state.blobURL} controls="controls"/>
                </div>

                <div id= "ButtonsAudio">
                    <div className= "Submit" onClick = {this.submit}><a>Submit</a></div>
                    <div className= "clear" onClick = {this.clear}><a>Clear</a></div>
                </div>
            </div>
        );
    }
}

export default RecordButton;