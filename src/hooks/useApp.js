import { useSelector } from "react-redux";
import { selectGameOver } from "../store/slices/gameSlice";

export const useApp = () => {
  const gameOver = useSelector(selectGameOver);

  return {
    gameOver,
  };
};