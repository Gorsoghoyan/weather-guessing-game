import { Button, Spinner } from ".";
import { useGuessBox } from "../hooks";
import styles from "../assets/sass/guessBox.module.scss";

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
    return <p className={styles.error}>{error}</p>
  }

  return (
    <div className={styles.container}>
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