import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://server-y78j.onrender.com', 
  baseURL: 'https://server-production-40a3.up.railway.app/',
  withCredentials: true, 
});

export default instance;


