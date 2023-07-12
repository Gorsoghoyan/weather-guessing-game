import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slices/game/gameSlice";

export const store = configureStore({
  reducer: {
    game: gameSlice,
  }
});