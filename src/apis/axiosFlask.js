import axios from 'axios';

const axiosFlask = axios.create({
  baseURL: 'https://server-flask-ypt5.onrender.com/', // Flask ML backend
   // baseURL: 'https://server-flask-production-e75c.up.railway.app/', 
  withCredentials: true,
});

axiosFlask.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosFlask;


