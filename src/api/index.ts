import axios from 'axios';
import { buildEndpoint } from './endpointBuilder';

const api = axios.create({
  baseURL: buildEndpoint(''),
});

api.interceptors.request.use(
  (config) => {
    // Add any request interceptors if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export const getImages = (params = {}) => {
  const url = buildEndpoint('images', params);
  return api.get(url);
};

export default api;
