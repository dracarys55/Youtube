import axios from 'axios';

const KEY = 'AIzaSyCDyxcgeQVQ6EoInIn1Cn2pj6EhsRWaWHM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 6,
    key: KEY,
    type: 'video',
  },
});
