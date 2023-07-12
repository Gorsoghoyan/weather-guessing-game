import { Button } from ".";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../store/slices/game/gameSlice";
import { selectWins } from "../store/slices/game/selectors";
import styles from "../assets/sass/gameOver.module.scss";

export default function GameOver() {
  const dispatch = useDispatch();
  const wins = useSelector(selectWins);

  return (
    <div className={styles.container}>
      <h2 style={{ color: wins >= 3 ? "green" : "darkred" }}>
        {wins >= 3 ? "You Won :)" : "You Lost :("}
      </h2>
      <Button onClick={() => dispatch(reset())}>
        Play again
      </Button>
    </div>
  );  
}