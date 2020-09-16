import React, { Component } from 'react';
import API from '../../../services/API';
import LevelButton from '../../helpComponents/LevelButton/LevelButton';
import Title from '../../helpComponents/Title/Title';
import './LevelPage.css';

export default class LevelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levels: [1, 2, 3, 4],
            nameLevels: ["Easy", "Easy +", "Hard", "Insane"],
            maxScore: [80, 140, 200, 300],
            score: 100
        }
    }

    render() {
        return (
            <div className="level-page">
                <Title name=" ....LEVELS " />
                <div id="box1">
                    {
                        this.state.levels.map((level, index) => {
                            if (this.state.score > this.state.maxScore[index]) {
                                return (
                                    <div>
                                        <LevelButton level={level} key={index} />
                                        <h2>{this.state.nameLevels[index]}</h2>
                                    </div>
                                );
                            } else {
                                return (
                                    <div>
                                        <LevelButton level={level} key={index} />
                                        <h2>Bloqueado</h2>
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