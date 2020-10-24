import axios from 'axios';
const KEY = 'AIzaSyB6-3QlNpVlyH1tHT_69pzmrFW8QHHrxHU'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})