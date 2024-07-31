import axios from 'axios';

const API_URL = 'http://localhost:3000/catagories';

export const getCatagories = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Đảm bảo response.data là mảng
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};