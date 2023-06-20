import Spinner from "./components/ui/Spinner";
import { Fragment, Suspense, lazy } from "react";
import { useApp } from "./hooks/useApp";
import s from "./assets/sass/app.module.scss";

const GuessBox = lazy(() => import("./components/GuessBox"));
const GameResults = lazy(() => import("./components/GameResults"));
const GameOver = lazy(() => import("./components/GameOver"));

export default function App() {
  const { gameOver } = useApp();

  return (
    <div className={s.mainContainer}>
      <h1>Weather<span>guess</span></h1>
      <section className={s.board}>
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