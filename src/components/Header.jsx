import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>This is a TodoList</h1>
    </div>
  );
}
