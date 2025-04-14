import axios from 'axios';

const api = axios.create({
  baseURL: 'https://donorconnect.duckdns.org/api', // Replace with the actual base URL from the API documentation
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;