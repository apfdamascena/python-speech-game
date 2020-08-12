import React, { Component } from 'react';
import './RankingItem.css';
import './responsive.css';

export default class RankingItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-TeacherItem">
                <div className="position">{this.props.index}</div>
                <div id="score-username">
                        {this.props.username}
                </div>
                {this.props.score}
            </div>
        );
    }
}