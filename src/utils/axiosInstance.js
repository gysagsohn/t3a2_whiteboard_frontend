import axios from 'axios'; 

const axiosInstance = axios.create({
    baseURL: 'https://t3a2b-whiteboardscheduler-backend.onrender.com/',
});

export default axiosInstance;

