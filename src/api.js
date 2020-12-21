import axios from 'axios'

const prefix = 'http://localhost:7005/api/v1';

export const get = async (endpoint) => {
  try {
    return (await axios.get(`${prefix}${endpoint}`)).data;
  } catch (err) {
    console.log(err);
    console.log(err.response);
    return err.response;
  }
}

export const put = async (endpoint, data) => {
  try {
    return (await axios.put(`${prefix}${endpoint}`, data)).data;
  } catch (err) {
    console.log(err);
    console.log(err.response);
    return err.response;
  }
}

export const post = async (endpoint, data) => {
  try {
    return (await axios.post(`${prefix}${endpoint}`, data)).data;
  } catch (err) {
    console.log(err);
    console.log(err.response);
    return err.response;
  }
}