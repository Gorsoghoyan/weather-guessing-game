import Button from "./ui/Button";
import Spinner from "./ui/Spinner";
import { useGuessBox } from "../hooks/useGuessBox";
import s from "../assets/sass/guessBox.module.scss";

export default function GuessBox() {
  const { 
    error,
    loading,
    inputRef, 
    btnDisabled, 
    currentCity, 
    handleSubmit 
  } = useGuessBox();

  if (error) {
    return <p className={s.error}>{error}</p>
  }

  return (
    <div className={s.container}>
      <h2>{currentCity}</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="number"
          placeholder="Your guess text box"
        />
        <Button
          width={100}
          disabled={btnDisabled || loading}
        >
          {loading ? <Spinner size={16} /> : "Check"}
        </Button>
      </form>
    </div>
  );
}