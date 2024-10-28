import axios from 'axios';
import { baseUrl } from './BaseUrl/BaseUrl';

export const axiosInstance=axios.create({
    baseUrl:baseUrl,
})
axiosInstance.interceptors.request.use((config)=>{
config.headers["Authorization"]=`Bearer ${localStorage.getItem("token")}`
return config;
})