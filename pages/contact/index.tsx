import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import assert from "assert";
import axios from "axios";
import React, { useRef } from "react";
import Divider from "../../components/Divider";
import styles from "../../styles/pages/Contact.module.css";
import { EmailData } from "../../types/Email";

type FormRefObject =
  | React.RefObject<HTMLInputElement>
  | React.RefObject<HTMLTextAreaElement>;

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

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
      // TODO : add better way to handle error.
      alert("Input not valid for form");
      return;
    }

    await axios
      .post("/api/sendgrid", data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p className={styles.title}>Contact</p>
        <Divider />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.dialogBox}>
          <div className={styles.dialogContainer}>
            <p className={styles.dialogTitle}>I&apos;d love to hear from you</p>
            <p className={styles.dialogDescription}>
              Feel free to contact me by submitting the form below, or send me
              an email at{" "}
              <span style={{ color: "red", textDecoration: "underline" }}>
                kylestubbs102@gmail.com
              </span>
              .
            </p>
            <p className={styles.dialogDescription}>
              You can also reach me at the following links.
            </p>
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
          </div>
        </div>
        <form
          className={styles.inputContainer}
          onSubmit={(e) => handleSubmit(e)}
        >
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
          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
