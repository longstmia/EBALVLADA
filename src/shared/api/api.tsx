import axios from 'axios';
const apiBaseUrl = process.env.REACT_APP_BASE_API_URL;

const api = axios.create({
  baseURL: apiBaseUrl,
  timeout: 5000,
});

export default api;
