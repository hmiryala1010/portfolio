// frontend/src/api/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || ,
});

export const fetchData = async () => {
  try {
    const response = await API.get('/');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
