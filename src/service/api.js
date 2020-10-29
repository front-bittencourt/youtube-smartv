import axios from 'axios';
const KEY = 'AIzaSyAzw13Of3c1THgCaL3QQgGSQ1ZC_6Bb2N8'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})