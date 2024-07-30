import axios from "axios";

axios.defaults.baseURL = "https://msc-back.onrender.com/api/archives";

export const getAllSongs = async () => {
  try {
    const response = await axios.get("/");
    return response.data;
  } catch (error) {
    console.error("Error fetching all songs:", error);
    throw error;
  }
};

export const getFilteredSongs = async (start) => {
  try {
    const response = await axios.get(`/filter?start=${start}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching filtered songs:", error);
    throw error;
  }
};

export const searchSongs = async (query) => {
  try {
    const response = await axios.get(`/search?query=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error searching songs:", error);
    throw error;
  }
};
