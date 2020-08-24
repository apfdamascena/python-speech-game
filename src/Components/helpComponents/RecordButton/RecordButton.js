import React, { Component } from 'react';
import API from '../../../services/API';
import MicRecorder from 'mic-recorder-to-mp3';
import './RecordButton.css';
import './responsive.css';

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
        API.post(window.location.pathname,{
            user: this.state.user,
            blobURL: this.state.blobURL,
            blob: this.state.blob,
            points: this.state.score
        }).then((response) => {
            this.clear();
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

    // getScore = () => {
    //     let user  = firebase.auth().currentUser;
    //     if(!user.isAnonymous){
    //         firebase.firestore(fire).collection("users").doc(user.uid).get().then(doc => {
    //             if(!doc.exists){
    //                 console.log("dont't exist");
    //             } else{
    //                 let object = doc.data();
    //                 this.setState({score : object.score});
    //             }
    //         })
    //     }
    // }

    componentDidMount() {
        navigator.getUserMedia({ audio: true },
          () => {
            this.setState({ isBlocked: false});
          },
          () => {
            this.setState({ isBlocked: true });
          },
        );
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