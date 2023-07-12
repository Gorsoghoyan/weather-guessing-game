import { useSelector } from "react-redux";
import { selectGameOver } from "../store/slices/game/selectors";

export const useApp = () => {
  const gameOver = useSelector(selectGameOver);

  return {
    gameOver
  };
};