import { ResultItem } from ".";
import { useSelector } from "react-redux";
import { selectResults } from "../store/slices/game/selectors";
import styles from "../assets/sass/gameResults.module.scss";

export default function GameResults() {
  const results = useSelector(selectResults);

  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.results}>
        {!!results.length && results.map((result) => (
          <ResultItem
            key={result.id}
            guess={result.guess}
            temp={result.temp}
            status={result.status}
          />
        ))}
      </div>
    </div>
  );
}