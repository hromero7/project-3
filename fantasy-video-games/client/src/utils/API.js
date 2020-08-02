import axios from 'axios';

export const getStreams = id => axios.get(`http://localhost:3003/api/twitch/streams/${id}`);
export const updateUserBalance = (id, change) => axios.put(`/api/users/balance/${id}`, {change});
export const updateUserEmotes = (id, emote) => axios.put(`/api/users/emotes/${id}`, {emote});