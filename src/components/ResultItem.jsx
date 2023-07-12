import styles from "../assets/sass/gameResults.module.scss";

export default function ResultItem({ guess, temp, status }) {
  return (
    <div
      className={styles.resultItem}
      style={{
        color: status === "won" ? "green" : "darkred"
      }}
    >
      <h3>{guess}</h3>
      <span>Was {temp}</span>
    </div>
  );
};