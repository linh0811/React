import axios from 'axios';

const API_URL = 'http://localhost:3000/product';

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Đảm bảo response.data là mảng
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};

export const getProductsHot = async () => {
  try {
    const response = await axios.get(`${API_URL}/hot`);
    return response.data; // Đảm bảo response.data là mảng
  } catch (error) {
    console.error('Error fetching hot products', error);
    throw error;
  }
};

export const getProductsNew = async () => {
  try {
    const response = await axios.get(`${API_URL}/new`);
    return response.data; // Đảm bảo response.data là mảng
  } catch (error) {
    console.error('Error fetching new products', error);
    throw error;
  }
};

export const getProductsBuy = async () => {
  try {
    const response = await axios.get(`${API_URL}/buy`);
    return response.data; // Đảm bảo response.data là mảng
  } catch (error) {
    console.error('Error fetching buy products', error);
    throw error;
  }
};
export const getProduct = async (productId) => {
    try {
      const response = await axios.get(`${API_URL}/${productId}`);
      return response.data; // Đảm bảo response.data là mảng
    } catch (error) {
      console.error('Error fetching new products', error);
      throw error;
    }
  };
  export const getProductByQuery = async (params) => {
    try {
      let query = '';
      if (params.keyword) {
        query = `keyword=${params.keyword}`;
      } else if (params.catagory) {
        query = `catagory=${params.catagory}`; // Đảm bảo tham số đúng với API của bạn
      }
      const response = await axios.get(`${API_URL}/timkiem/?${query}`);
      if (Array.isArray(response.data)) {
        return response.data;
      } else {
        throw new Error('Unexpected response format: expected an array');
      }
    } catch (error) {
      console.error('Error fetching products by query', error);
      throw error;
    }
  };
  