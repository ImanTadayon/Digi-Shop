import axios from "axios";
import { BASE_URL } from "./BaseUrl";

// ######################   LIST API   #######################
export const userApi = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/1`);
      console.log("Full API Response:", response); 
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  