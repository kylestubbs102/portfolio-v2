import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/Toast.module.css";

export enum ToastType {
  Success,
  Error,
}

interface ToastProps {
  type?: ToastType;
  isActive: boolean;
  toggleActive: () => void;
}

export default function Toast({ type, isActive, toggleActive }: ToastProps) {
  switch (type) {
    case ToastType.Error:
      return <ErrorToast isActive={isActive} toggleActive={toggleActive} />;
    case ToastType.Success:
    default:
      return <SuccessToast isActive={isActive} toggleActive={toggleActive} />;
  }
}

function SuccessToast({ isActive, toggleActive }: ToastProps) {
  console.log(isActive);
  return (
    <div
      className={
        isActive
          ? `${styles.toast} ${styles.success} ${styles.active}`
          : `${styles.toast} ${styles.success}`
      }
    >
      <div className={styles.toastContent}>
        <FontAwesomeIcon
          icon={faCheck}
          className={`${styles.badge} ${styles.check}`}
        />

        <div className={styles.message}>
          <span className={`${styles.text} ${styles.title}`}>Success</span>
          <span className={styles.text}>Your email has been sent.</span>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faXmark}
        className={styles.close}
        onClick={() => toggleActive()}
      />
      <div
        className={
          isActive ? `${styles.progress} ${styles.active}` : styles.progress
        }
      ></div>
    </div>
  );
}

function ErrorToast({ isActive, toggleActive }: ToastProps) {
  return (
    <div
      className={
        isActive
          ? `${styles.toast} ${styles.error} ${styles.active}`
          : `${styles.toast} ${styles.error}`
      }
    >
      <div className={styles.toastContent}>
        <FontAwesomeIcon
          icon={faXmark}
          className={`${styles.badge} ${styles.xmark}`}
        />

        <div className={styles.message}>
          <span className={`${styles.text} ${styles.title}`}>Error</span>
          <span className={styles.text}>Unable to send email</span>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faXmark}
        className={styles.close}
        onClick={() => toggleActive()}
      />
      <div
        className={
          isActive ? `${styles.progress} ${styles.active}` : styles.progress
        }
      ></div>
    </div>
  );
}
