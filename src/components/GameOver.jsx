import Button from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { reset, selectWins } from "../store/slices/gameSlice";
import s from "../assets/sass/gameOver.module.scss";

export default function GameOver() {
  const dispatch = useDispatch();
  const wins = useSelector(selectWins);

  return (
    <div className={s.container}>
      <h2 style={{ color: wins >= 3 ? "green" : "darkred" }}>
        {wins >= 3 ? "You Won :)" : "You Lost :("}
      </h2>
      <Button onClick={() => dispatch(reset())}>
        Play again
      </Button>
    </div>
  );  
}