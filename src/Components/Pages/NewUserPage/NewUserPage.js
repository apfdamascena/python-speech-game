import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoInputLogo from '../../helpComponents/LoginInputLogo/LoginInputLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './NewUserPage.css';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import './responsive.css';


class NewUserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            score: 0
        }
    }

    // writeUserData = (userId,score, username) => {
    //     let store = firebase.firestore(fire);
    //     store.collection("users").doc(userId).set({
    //         score: score,
    //         username: username
    //     }).then(() => {
    //         console.log("foi");
    //     }).catch(() => {
    //         console.log("nao foi");
    //     });
    // }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: [event.target.value]
    //     });
    // }

    // signUp = (event) => {
    //     if(this.state.password[0] == this.state.confirmPassword[0]){
    //         fire.auth().createUserWithEmailAndPassword(this.state.email[0], this.state.password[0]).then((user) => {
    //             let curr_user = fire.auth().currentUser;
    //             this.writeUserData(curr_user.uid, this.state.score, this.state.username[0]);
    //             this.props.didTapRegister();
    //         }).catch((error) => {
    //             console.log(error);
    //         });
    //     } else {
    //         alert("Passwords aren't the same");
    //     }
    // }

    render() {
        return (
            <form className = "containerNewUser">
                <Link to = "/login-page" id="leftSide">
                    <OrangeButton  action="GO BACK" handleButtonPressed={this.props.didTapRegister} />
                </Link>
                <div id ="imageNewUSer">
                    <LogoInputLogo />
                </div>
                <div className="UserName">
                    <a className="UserIcon"><FontAwesomeIcon icon={faUserEdit} /></a>
                    <input className="name"
                        placeholder="Username"
                        name="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    ></input>
                </div>
                <div className="UserEmail">
                    <a className="EmailIcon"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <input className="Email"
                        placeholder="Email"
                        type="email"
                        onChange={this.handleChange}
                        name="email"
                        value={this.state.email}
                    ></input>
                </div>
                <div className="UserPassword">
                    <a className="PasswordIcon"><FontAwesomeIcon icon={faUserLock} /></a>
                    <input className="Password"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    ></input>
                </div>
                <div className="ConfirmUserPassword">
                    <a className="iconConfirmUserPassword"><FontAwesomeIcon icon={faLock} /></a>
                    <input className="ConfirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        onChange={this.handleChange}
                        value={this.state.confirmPassword}
                    ></input>
                </div>
                <div className="buttonCreateUser" onClick={this.signUp}>
                    <a>Create</a>
                </div>
            </form>
        );
    }
}

export default NewUserPage;