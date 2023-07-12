import styles from "../../assets/sass/spinner.module.scss";

export default function Spinner({ size }) {
  return (
    <div
      className={styles.loading}
      style={{
        width: size,
        height: size,
      }}
    ></div>
  );
}