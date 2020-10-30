import axios from 'axios';
const KEY = 'AIzaSyCg_1JxSvg6RcG8jaDLCVou1GQII-RGsCY'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
})