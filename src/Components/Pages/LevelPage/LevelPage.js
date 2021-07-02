/* eslint-disable react/no-array-index-key */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../../services/API';
import LevelButton from '../../helpComponents/LevelButton/LevelButton';
import LevelButtonOff from '../../helpComponents/LevelButtonOff/LevelButtonOff';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import Title from '../../helpComponents/Title/Title';
import rename from '../../../utils/rename';
import './LevelPage.css';
import './responsive.css';

export default class LevelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levels: [1, 2, 3, 4],
            nameLevels: ['Easy', 'Normal', 'Hard', 'Insane'],
            maxScore: [0, 140, 200, 300],
            score: 0,
            user: this.props.location.state,
            redirect: '',
        };
    }

    componentDidMount() {
        API.get(window.location.pathname)
            .then((response) => {
                const { score } = response.data;
                this.setState({ score });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleTapLevelButton = (level) => {
        const whereIGo = rename(window.location.pathname, parseInt(level));
        this.setState({ redirect: whereIGo });
    };

    render() {
        if (this.state.redirect) {
            return (
                <Redirect
                    to={{
                        pathname: this.state.redirect,
                        state: this.state.user,
                    }}
                />
            );
        }

        return (
            <div className="level-page">
                <OrangeButton
                    action={`SCORE: ${this.state.score}`}
                    idButton="rightOrangeButtonLevelPage"
                />
                <Title name="LEVELS" id="levels" />
                <div id="box1">
                    {this.state.levels.map((level, index) => {
                        if (
                            this.state.score >= this.state.maxScore[index] ||
                            this.state.user.isAnonymous 
                        ) {
                            return (
                                <div className="elements">
                                    <LevelButton
                                        level={level}
                                        key={index}
                                        onClick={() => {
                                            this.handleTapLevelButton(level);
                                        }}
                                    />
                                    <h2>{this.state.nameLevels[index]}</h2>
                                    <h4>
                                        {`${this.state.maxScore[index]}pts.`}
                                    </h4>
                                </div>
                            );
                        }
                        return (
                            <div className="elements">
                                <LevelButtonOff level={level} key={index} />
                                <h2>Block</h2>
                                <h4>{`${this.state.maxScore[index]}pts.`}</h4>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
