import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

const api = {
  get: async (url) => {
    const response = await axios.get(`${BASE_URL}${url}`, { withCredentials: true });
    return response;
  },
  post: async (url, data) => {
    const response = await axios.post(`${BASE_URL}${url}`, data, { withCredentials: true });
    return response;
  },
  put: async (url, data) => {
    const response = await axios.put(`${BASE_URL}${url}`, data, { withCredentials: true });
    return response;
  },
  delete: async (url) => {
    const response = await axios.delete(`${BASE_URL}${url}`, { withCredentials: true });
    return response;
  },
};

export default api;
