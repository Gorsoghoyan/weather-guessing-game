import s from "../../assets/sass/spinner.module.scss";

export default function Spinner({ size }) {
  return (
    <div
      className={s.loading}
      style={{
        width: size,
        height: size,
      }}
    ></div>
  );
}