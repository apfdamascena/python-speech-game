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
                    <div>
                        <LevelButton level="1" />
                        <h2>Easy</h2>
                    </div>

                    <div>
                        <LevelButton level="2" />
                        <h2>Easy +</h2>
                    </div>

                    <div>
                        <LevelButton level="3" />
                        <h2>Hard</h2>
                    </div>

                    <div>
                        <LevelButton level="4" />
                        <h2>Insane</h2>
                    </div>
                </div>
            </div>
        );
    }
}