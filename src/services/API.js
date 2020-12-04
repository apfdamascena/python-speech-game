import axios from 'axios';

const API = axios.create({
    baseURL: 'https://python-speech-game-server.herokuapp.com/',
});

export default API;
