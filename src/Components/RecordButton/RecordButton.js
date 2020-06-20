import React, { Component } from 'react';
import './RecordButton.css'
import MicRecorder from 'mic-recorder-to-mp3';

const recorder = new MicRecorder({ bitRate: 128 });

class RecordButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRecording: false,
            blobURL: '',
            isBlocked: false,
            position: ''
        }
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
        console.log(this.state.position.coords.latitude)
        recorder.stop().getMp3().then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob)
            this.setState({ blobURL, isRecording: false });
        }).catch((error) => console.log(error));
    }

    clear = () => {
        this.setState({blobURL:''});
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
    }

    render() {
        return (
            <div>
                <div className="recordClass">
                    <button
                        className={this.state.isRecording ? "Rec" : "notRec"}
                        id="recButton"
                        onClick={!this.state.isRecording ? this.start : this.stop}></button>
                    <audio id="recording" src={this.state.blobURL} controls="controls"/>
                </div>

                <div id = "ButtonsAudio">
                    <div className= "Submit"><a>Submit</a></div>
                    <div className= "clear" onClick = {this.clear}><a>Clear</a></div>
                </div>
            </div>
        );
    }
}

export default RecordButton;