import axios from 'axios';
const key = 'AIzaSyD-oq8gCUZKmfCRv0k3Ywj4F4zgIIeaoFc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key,
    },
});
