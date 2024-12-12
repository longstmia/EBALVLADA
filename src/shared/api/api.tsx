import axios from 'axios';

const confApi = {
  BaseUrl: 'http://localhost:3001',
};

const api = axios.create({
  baseURL: confApi.BaseUrl,
  timeout: 5000,
});

export default api;
