import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function add() {
    setResult(num1 + num2);
  }

  function sub() {
    setResult(num1 - num2);
  }

  function mul() {
    setResult(num1 * num2);
  }

  function div() {
    setResult(num1 / num2);
  }

  return (
    <div className={styles.container}>
      <div data-testid="result" className={styles.result}>
        {result}
      </div>
      <div>
        <input
          type="number"
          value={num1}
          data-testid="num1"
          className={styles.input}
          onChange={(e) => setNum1(parseInt(e.target.value))}
        />
        <input
          type="number"
          value={num2}
          data-testid="num2"
          className={styles.input}
          onChange={(e) => setNum2(parseInt(e.target.value))}
        />
      </div>
      <button data-testid="add" onClick={add} className={styles.button}>
        Add
      </button>
      <button data-testid="subtract" onClick={sub} className={styles.button}>
        subtract
      </button>
      <button data-testid="multiply" onClick={mul} className={styles.button}>
        multiply
      </button>
      <button data-testid="divide" onClick={div} className={styles.button}>
        divide
      </button>
    </div>
  );
}
