import axios from 'axios';
import { url } from './api';


export const fetchBlogs = (page) => {
    return axios.get(`${url}/blog/posts?page=${page}&perPage=3`);
};

export const createBlog = (data) => {
    return axios.post(`${url}/blog/post`, data, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
}

export const updateBlogPost = (data, id) => {
    return axios.put(`${url}/blog/post/${id}`, data, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
}

export const deleteBlogPost = (id) => {
    return axios.delete(`${url}/blog/post/${id}`)
}

export * from './auth'