import styles from "../styles/components/Divider.module.css";

export default function Divider() {
  return (
    <div className={styles.dividerContainer}>
      <div
        className={styles.dividerItem}
        style={{ width: "57px", marginRight: "5px" }}
      ></div>
      <div
        className={styles.dividerItem}
        style={{ width: "8px", marginRight: "3px" }}
      ></div>
      <div className={styles.dividerItem} style={{ width: "4px" }}></div>
    </div>
  );
}
