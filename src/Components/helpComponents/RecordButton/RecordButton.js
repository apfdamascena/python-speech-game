/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import firebase from 'firebase';
import MicRecorder from 'mic-recorder-to-mp3';
import firebaseRef from '../../../database/firebaseConfig';
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
            showSent: false,
            user: this.props.user,
            score: this.props.score,
        };
    }

    componentDidMount() {
        navigator.getUserMedia(
            { audio: true },
            () => {
                this.setState({ isBlocked: false });
            },
            () => {
                this.setState({ isBlocked: true });
            },
        );

        API.get(window.location.pathname)
            .then((response) => {
                const { score } = response.data;
                this.setState({ score });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    submit = () => {
        const store = firebase.storage(firebaseRef);
        store
            .ref(`audios/${this.state.blobURL}`)
            .put(this.state.blob)
            .then((snapshot) => {
                this.setState({ showSent: true });
                if (!this.state.user.isAnonymous) {
                    firebase
                        .firestore(firebaseRef)
                        .collection('users')
                        .doc(this.state.user.uid)
                        .update({
                            score: this.state.score + 10,
                        })
                        .then((response) => {
                            this.clear();
                            this.props.score();
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
                this.forceUpdate();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    start = () => {
        this.setState({ showSent: false });
        if (this.state.isBlocked) {
            console.log('Permission Denied');
        } else {
            recorder
                .start()
                .then(() => {
                    this.setState({ isRecording: true });
                })
                .catch((error) => console.error(error));
        }
    };

    stop = () => {
        recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob);
                this.setState({ blob });
                this.setState({ blobURL, isRecording: false });
            })
            .catch((error) => console.log(error));
    };

    clear = () => {
        this.setState({ blobURL: '' });
    };

    render() {
        return (
            <div className="containerRecordButton">
                <div className="audioSent">
                    <h2>{this.state.showSent ? 'AUDIO WAS SENT' : ''}</h2>
                </div>
                <div className="recordClass">
                    <button
                        className={this.state.isRecording ? 'Rec' : 'notRec'}
                        id="recButton"
                        onClick={
                            !this.state.isRecording ? this.start : this.stop
                        }
                    />
                    <audio
                        id="recording"
                        src={this.state.blobURL}
                        controls="controls"
                    />
                </div>

                <div id="ButtonsAudio">
                    <div className="Submit" onClick={this.submit}>
                        <a>Submit</a>
                    </div>
                    <div className="clear" onClick={this.clear}>
                        <a>Clear</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecordButton;
