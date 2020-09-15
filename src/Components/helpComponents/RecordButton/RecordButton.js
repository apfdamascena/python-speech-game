import React, { Component } from 'react';
import firebase from 'firebase';
import firebaseRef from '../../../database/firebaseConfig';
import MicRecorder from 'mic-recorder-to-mp3';
import './RecordButton.css';
import './responsive.css';
import API from '../../../services/API';

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
            showSent: false,
            user: this.props.user,
            score : this.props.score,
        }
    }

    submit = () => {
        let store = firebase.storage(firebaseRef);
        store.ref("audios/"+this.state.blobURL).put(this.state.blob).then((snapshot) => {
            this.setState({showSent: true});
            if(!this.state.user.isAnonymous){
                firebase.firestore(firebaseRef).collection("users").doc(this.state.user.uid).update({
                    score: (this.state.score+10)
                }).then((response) => {
                    this.clear();
                    this.props.score();
                }).catch((error) => {console.log(error)})
            }
            this.forceUpdate();
        }).catch((error) => {console.log(error)})
    }

    start = () => {
        this.setState({showSent : false});
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

    componentDidMount() {
        navigator.getUserMedia({ audio: true },
          () => {
            this.setState({ isBlocked: false});
          },
          () => {
            this.setState({ isBlocked: true });
          },
        );

        API.get(window.location.pathname).then((response) => {
            const {score} = response.data;
            this.setState({score: score})
        }).catch((error) => {console.log(error)});
    }

    render() {
        return (
            <div className = "containerRecordButton">
                <div className="audioSent">
                    <h2>{this.state.showSent ? "AUDIO WAS SENT" : ""}</h2>
                </div>
                <div className="recordClass">
                    <button
                        className={this.state.isRecording ? "Rec" : "notRec"}
                        id="recButton"
                        onClick={!this.state.isRecording ? this.start : this.stop}></button>
                    <audio id="recording" src={this.state.blobURL} controls="controls"/>
                </div>

                <div id= "ButtonsAudio">
                    <div className= "Submit" onClick = {this.submit} ><a>Submit</a></div>
                    <div className= "clear" onClick = {this.clear}><a>Clear</a></div>
                </div>
            </div>
        );
    }
}

export default RecordButton;