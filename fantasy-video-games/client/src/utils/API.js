import axios from 'axios';

export const getStreams = id => axios.get(`http://localhost:3003/api/twitch/streams/${id}`);