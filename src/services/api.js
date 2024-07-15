// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL:import.meta.env.VITE_API_BASE_URL || '<http://localhost:8000/api>',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

export default api;
