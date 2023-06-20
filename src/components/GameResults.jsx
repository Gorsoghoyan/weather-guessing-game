import { useSelector } from "react-redux";
import { selectResults } from "../store/slices/gameSlice";
import s from "../assets/sass/gameResults.module.scss";

const ResultItem = ({ guess, temp, status }) => {
  return (
    <div
      className={s.resultItem}
      style={{
        color: status === "won" ? "green" : "darkred"
      }}
    >
      <h3>{guess}</h3>
      <span>Was {temp}</span>
    </div>
  );
};

export default function GameResults() {
  const results = useSelector(selectResults);

  return (
    <div className={s.container}>
      <hr />
      <div className={s.results}>
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