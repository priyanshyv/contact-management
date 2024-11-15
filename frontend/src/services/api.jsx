import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:7003/api',
});

export default api;
