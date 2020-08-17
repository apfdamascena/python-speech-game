import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5001/python-speech-game/us-central1/API',
});

export default API;