/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import API from '../../../services/API';

import RankingItem from '../../helpComponents/RankingItem/RankingItem';
import Title from '../../helpComponents/Title/Title';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';

import './RankingPage.css';
import './responsive.css';

class RankingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountOfUsers: [],
        };
    }

    componentDidMount() {
        API.get(window.location.pathname)
            .then((response) => {
                const { users } = response.data;
                users.sort(function (user, otherUSer) {
                    return otherUSer[1] - user[1];
                });
                this.setState({ amountOfUsers: users });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div className="container-RankingPage">
                <OrangeButton
                    action="GO BACK"
                    idButton="leftOrangeButtonRankingPage"
                    onClick={this.goBack}
                />
                <div id="title">
                    <Title name="...RANKING" />
                </div>
                {this.state.amountOfUsers.map((users, index) => {
                    return (
                        <RankingItem
                            key={index}
                            index={index + 1}
                            username={users[0]}
                            score={users[1]}
                        />
                    );
                })}
            </div>
        );
    }
}

export default RankingPage;
