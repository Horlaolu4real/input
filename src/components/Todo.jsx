import styles from "./list.module.css";
export default function Todo({ item, array, setArray }) {
  const submitList = () => {
    setArray(array.filter((items) => items.id !== item.id));
  };
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.head}>{item.name}</h1>
        <button className={styles.btn} onClick={submitList}>SUBMIT</button>
      </div>
    </div>
  );
}
