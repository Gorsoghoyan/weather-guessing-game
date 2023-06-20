import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cities } from "../../db/cities";

const API_KEY = "4cf65d99fdeb1d14db18420b840d7a69";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

export const fetchWeatherAPI = createAsyncThunk(
  "game/fetchWeather",
  async (cityName, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.message) throw data;
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  selectedCities: null,
  weather: null,
  results: [],
  wins: 0,
  gameOver: false,
  loading: false,
  error: ""
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setRandomCities: (state) => {
      const randomIndex = Math.floor(Math.random() * cities.length);
      state.selectedCities = [...cities].slice(randomIndex, randomIndex + 5);
    },
    setResults: (state, action) => {
      state.results = [ ...state.results, { ...action.payload }];
    },
    toggleGameOver: (state, action) => {
      state.gameOver = action.payload;
    },
    setWins: (state) => {
      state.wins += 1;
    },
    reset: (state) => {
      state.selectedCities = null;
      state.weather = null;
      state.results = [];
      state.gameOver = false;
      state.wins = 0;
      state.loading = false;
      state.error = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherAPI.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeatherAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(fetchWeatherAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const selectCities = (state) => state.game.selectedCities;
export const selectWeather = (state) => state.game.weather;
export const selectResults = (state) => state.game.results;
export const selectGameOver = (state) => state.game.gameOver;
export const selectWins = (state) => state.game.wins;
export const selectLoading = (state) => state.game.loading;
export const selectError = (state) => state.game.error;

export const { 
  setRandomCities, 
  setResults, 
  toggleGameOver,
  setWins,
  reset
} = gameSlice.actions;

export default gameSlice.reducer;