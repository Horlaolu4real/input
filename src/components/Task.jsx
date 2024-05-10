import shortid from "shortid";
import styles from "./task.module.css";

export default function Task({ input, setInput, array, setArray }) {
  const inputFile = (event) => {
    setInput(event.target.value);
  };
  const workFile = (event) => {
    event.preventDefault();
    setArray([...array, { name: input, id: shortid.generate() }]);
    setInput("");
  };
  return (
    <div>
      <form className={styles.container} onSubmit={workFile}>
        <input
          className={styles.input}
          onChange={inputFile}
          value={input}
          type="text"
          placeholder="Add a input"
        />
        <button className={styles.btn} type="submit">
          ADD INPUT
        </button>
      </form>
    </div>
  );
}
