import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://server-qxfd.onrender.com/api/v1', 
  withCredentials: true, 
});

export default instance;
