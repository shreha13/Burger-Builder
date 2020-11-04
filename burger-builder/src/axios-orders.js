import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-1bceb.firebaseio.com/'
});

export default instance;