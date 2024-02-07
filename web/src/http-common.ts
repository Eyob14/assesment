const API_BASE_URL = "https://api.testvalley.kr";


import axios from "axios";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

// Add token to headers if available
api.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
