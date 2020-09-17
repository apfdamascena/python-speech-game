import React, { Component } from 'react';
import API from '../../../services/API';
import LevelButton from '../../helpComponents/LevelButton/LevelButton';
import LevelButtonOff from '../../helpComponents/LevelButtonOff/LevelButtonOff';
import OrangeButton from '../../helpComponents/OrangeButton/OrangeButton';
import { Redirect } from 'react-router-dom';
import Title from '../../helpComponents/Title/Title';
import rename from '../../../utils/rename';
import './LevelPage.css';

export default class LevelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levels: [1, 2, 3, 4],
            nameLevels: ["Easy", "Easy +", "Hard", "Insane"],
            maxScore: [80, 140, 200, 300],
            score: 0,
            user: this.props.location.state,
            redirect: ''
        }
    }

    handleTapLevelButton = (level) => {
        let whereIGo = rename(window.location.pathname,parseInt(level));
        this.setState({redirect: whereIGo});
        
    }

    componentDidMount() {
        API.get(window.location.pathname).then((response) => {
            const { score } = response.data;
            this.setState({ score: score })
        }).catch((error) => { console.log(error) });
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={{
                    pathname: this.state.redirect,
                    state: this.state.user,
                }}/>
            );
        }

        return (
            <div className="level-page">
                <OrangeButton action={"SCORE: " + this.state.score} idButton="rightOrangeButtonLevelPage" />
                <Title name=" ....LEVELS" />
                <div id="box1">
                    {
                        this.state.levels.map((level, index) => {
                            if (this.state.score >= this.state.maxScore[index]) {
                                return (
                                    <div className="elements">
                                        <LevelButton level={level} key={index} onClick={() => {
                                            this.handleTapLevelButton(level)
                                        }} />
                                        <h2>{this.state.nameLevels[index]}</h2>
                                        <h4>{this.state.maxScore[index] + "pts."}</h4>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="elements">
                                        <LevelButtonOff level={level} key={index} />
                                        <h2>Block</h2>
                                        <h4>{this.state.maxScore[index] + "pts."}</h4>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </div>
        );
    }
}