// src/services/api.js
import axios from "axios";


const API_KEY = "ae40ff5aa4b14f8d9a0141808240201";
const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";


const fetchWeatherData = async (location) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${location}&days=7`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchWeatherData;
