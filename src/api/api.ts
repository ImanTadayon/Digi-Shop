import axios from "axios";
import { BASE_URL } from "./BaseUrl";

// ######################   USER API   #######################
export const userApi = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/1`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // ######################   PRODUCTS API   #######################
  export const productsApi = async () => {
    try{
      const response = await fetch(`${BASE_URL}/products`);
      return response.json();
    }catch (error) {
      throw error;
    }
  };