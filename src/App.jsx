import { useApp } from "./hooks";
import { Spinner } from "./components";
import { Fragment, Suspense, lazy } from "react";
import styles from "./assets/sass/app.module.scss";

const GuessBox = lazy(() => import("./components/GuessBox"));
const GameResults = lazy(() => import("./components/GameResults"));
const GameOver = lazy(() => import("./components/GameOver"));

export default function App() {
  const { gameOver } = useApp();

  return (
    <div className={styles.mainContainer}>
      <h1>Weather<span>guess</span></h1>
      <section className={styles.board}>
        <Suspense fallback={<Spinner size={40} />}>
          {gameOver ? (
            <GameOver />
          ) : (
            <Fragment>
              <GuessBox />
              <GameResults />
            </Fragment>
          )}
        </Suspense>
      </section>
    </div>
  );
}