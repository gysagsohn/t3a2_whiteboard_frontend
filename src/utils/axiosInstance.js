import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://t3a2b-whiteboardscheduler-backend.onrender.com/',
    withCredentials: true,
});

// Add a request interceptor to include the JWT token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
