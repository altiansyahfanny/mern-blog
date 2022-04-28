import axios from 'axios';
import { url } from './api';

export const register = (data) => {
    return axios.post(`${url}/auth/register`, data)
}

export const login = (data) => {
    return axios.post(`${url}/auth/login`, data)
}