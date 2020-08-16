import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3031',
});

export default API;