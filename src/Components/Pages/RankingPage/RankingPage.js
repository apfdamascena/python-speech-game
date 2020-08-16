import React, { Component } from 'react';
import fire from '../../../FireBase/FireBase';
import firebase from 'firebase';
import './RankingPage.css';
import RankingItem from '../../helpComponents/RankingItem/RankingItem';
import Title from '../../helpComponents/Title/Title';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import './responsive.css';

class RankingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountOfUsers: []
        }
    }

    getAllUsers = () => {
        let store = firebase.firestore(fire);
        store.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let dataUser = doc.data()
                let infoUser = [dataUser.username, dataUser.score]
                const users = this.state.amountOfUsers
                users.push(infoUser);
                this.setState({ amountOfUsers: users })
            });
            let users = this.state.amountOfUsers;
            users.sort(function (a, b) {
                return b[1] - a[1];
            });
            this.setState({ amountOfUsers: users });
        });
    }

    componentWillMount() {
        this.getAllUsers();
    }

    render() {
        return (
            <div className="container-RankingPage">
                <OrangeButton action="GO BACK" idButton="leftOrangeButtonRankingPage" handleButtonPressed={this.props.didTapGoBackGamePage} />
                <div id = "title">
                    <Title name="...RANKING" />
                </div>
                {
                    this.state.amountOfUsers.map((users, index) => {
                        return (
                            <RankingItem key={index} index={index + 1} username={users[0]}
                                score={users[1]}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default RankingPage;