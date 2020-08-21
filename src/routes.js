import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import HomePage from './Components/Pages/HomePage/HomePage';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import NewUserPage from './Components/Pages/NewUserPage/NewUserPage';
import GamePage from './Components/Pages/GamePage/GamePage';
import RankingPage from './Components/Pages/RankingPage/RankingPage';
import OptionPage from './Components/Pages/OptionPage/OptionPage';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path = "/" exact component = {HomePage}/>
            <Route path = "/login-page"  component = {LoginPage}/>
            <Route path = "/about-page"  component = {AboutPage}/>
            <Route path = "/new-user-page"  component = {NewUserPage}/>
            <Route path = "/game-page/:id/:optionChosen"  component = {GamePage}/>
            <Route path = "/ranking-page"  component = {RankingPage}/>
            <Route path = "/option-page/:id"  component = {OptionPage}/>
        </BrowserRouter>
    );
}