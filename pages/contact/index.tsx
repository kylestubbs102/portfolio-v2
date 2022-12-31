import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import assert from "assert";
import axios from "axios";
import React, { useRef, useState } from "react";
import Divider from "../../components/Divider";
import Toast, { ToastType } from "../../components/Toast";
import styles from "../../styles/pages/Contact.module.css";
import { EmailData } from "../../types/Email";

type FormRefObject =
  | React.RefObject<HTMLInputElement>
  | React.RefObject<HTMLTextAreaElement>;

export default function Contact() {
  const [currentToastType, setCurrentToastType] = useState(ToastType.Success);
  const [toastIsActive, setToastIsActive] = useState(false);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function displayToast(type: ToastType) {
    setCurrentToastType(type);
    setToastIsActive(true);

    // make sure to clear timeout so that multiple timeouts 
    // don't overlap and close the toast early
    clearTimeout(currentTimeout);
    var timeout = setTimeout(() => {
      setToastIsActive(false);
    }, 5000);
    setCurrentTimeout(timeout);
  }

  function isRefEmpty(ref: FormRefObject): boolean {
    return ref.current == null || ref.current?.value.trim().length == 0;
  }

  function getFormDataOrNull(): EmailData | null {
    if (
      isRefEmpty(nameRef) ||
      isRefEmpty(emailRef) ||
      isRefEmpty(subjectRef) ||
      isRefEmpty(messageRef)
    ) {
      return null;
    }

    // will never occur, purely for compiler purposes
    assert(
      nameRef.current != null &&
        emailRef.current != null &&
        subjectRef.current != null &&
        messageRef.current != null
    );

    return {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let data = getFormDataOrNull();
    if (data == null) {
      displayToast(ToastType.Error);
      return;
    }

    await axios
      .post("/api/sendgrid", data)
      .then((response) => {
        console.log(response);
        // reset all inputs on success
        (e.target as HTMLFormElement).reset();
        displayToast(ToastType.Success);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.container}>
      {/* I put two toasts so that way the animations are smooth when transitioning between the two */}
      <Toast
        type={ToastType.Error}
        isActive={toastIsActive && currentToastType === ToastType.Error}
        toggleActive={() => setToastIsActive(false)}
      />
      <Toast
        type={ToastType.Success}
        isActive={toastIsActive && currentToastType === ToastType.Success}
        toggleActive={() => setToastIsActive(false)}
      />
      <div className={styles.headerContainer}>
        <p className={styles.title}>Contact</p>
        <Divider />
      </div>
      <form className={styles.inputContainer} onSubmit={(e) => handleSubmit(e)}>
        <input
          className={`${styles.baseInput} ${styles.normalInput}`}
          ref={nameRef}
          placeholder="Name"
        />
        <input
          className={`${styles.baseInput} ${styles.normalInput}`}
          ref={emailRef}
          placeholder="Email"
        />
        <input
          className={`${styles.baseInput} ${styles.normalInput}`}
          ref={subjectRef}
          placeholder="Subject"
        />
        <textarea
          className={`${styles.baseInput} ${styles.textarea}`}
          ref={messageRef}
          placeholder="Message"
        />
        <div className={styles.bottomContainer}>
          <div className={styles.linkOuterContainer}>
            <div className={styles.linkInnerContainer}>
              <a
                href="https://www.linkedin.com/in/kylestubbs102/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              </a>
              <a
                href="https://github.com/kylestubbs102/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className={styles.icon} />
              </a>
              <a
                href="mailto:kylestubbs102@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              </a>
            </div>
          </div>
          <button className={styles.button} type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
