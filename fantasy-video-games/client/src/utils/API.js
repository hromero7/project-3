import axios from 'axios';

export const getStreams = id => axios.get(`/api/twitch/streams/${id}`);