import React, { Component } from 'react';
import LevelButton from '../../helpComponents/LevelButton/LevelButton';
import Title from '../../helpComponents/Title/Title';
import './LevelPage.css';

export default class LevelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levels: [1, 2, 3, 4]
        }
    }

    render() {
        return (
            <div className="level-page">
                <Title name=" ....LEVELS " />
                <div id="box1">
                    <LevelButton level="1" />
                    <LevelButton level="2" />
                    <LevelButton level="3" />
                    <LevelButton level="4" />
                </div>
            </div>
        );
    }
}