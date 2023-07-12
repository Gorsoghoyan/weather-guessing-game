import { createSlice } from "@reduxjs/toolkit";
import { cities } from "../../../db/cities";
import { fetchWeatherAPI } from "./api";

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

export const { 
  setRandomCities, 
  setResults, 
  toggleGameOver,
  setWins,
  reset
} = gameSlice.actions;

export default gameSlice.reducer;