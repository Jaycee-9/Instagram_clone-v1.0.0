import axios from "axios";

const url = "http://localhost:3001";

export const userSignup = async (userData) => {
  try {
    const response = await axios.post(`${url}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const userLogin = async (loginData) => {
  try {
    const response = await axios.post(`${url}/login`, loginData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const userProfile = async (userData) => {
  try {
    const response = await axios.post(`${url}/profile`, userData);
    return response;
  } catch (error) {
    throw error.response;
  }
};
