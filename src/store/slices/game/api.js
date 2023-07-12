import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../../services/fetchService";

export const fetchWeatherAPI = createAsyncThunk(
  "game/fetchWeather",
  async (cityName, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await apiService.getWeatherData(cityName);
      const data = await response.json();
      if (data.message) throw data;
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);