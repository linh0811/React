import  axios from "axios";
const API_URL = 'http://localhost:3000/users/'
export const login = async (body)=>{
    try {
        const response = await axios.post(`${API_URL}/login`,body);
        return response;
    } catch (error) {
        console.error('Error Login:',error);
        throw error;
    }
} 
export const register = async (body)=>{
    try {
        const response = await axios.post(`${API_URL}/register`,body)
        return response;
    } catch (error) {
        console.error('Error Login:',error);
        throw error;
    }
}