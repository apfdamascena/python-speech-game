/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './RankingItem.css';
import './responsive.css';

export default class RankingItem extends Component {
    render() {
        return (
            <div className="container-TeacherItem">
                <div className="position">{this.props.index}</div>
                <div id="score-username">{this.props.username}</div>
                <div className="score">{this.props.score}</div>
            </div>
        );
    }
}
