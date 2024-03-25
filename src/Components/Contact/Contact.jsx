import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <h2>CONTACT</h2>
        <div className={styles.container}>
          <div className={styles.contact}>
            <span className={styles.icon}>
              <FaPhone />
            </span>
            <p>07425 275 774</p>
          </div>
          <div className={styles.contact}>
            <span className={styles.icon}>
              <HiOutlineMail />
            </span>
            <p>email: k-h_lee@hotmail.co.uk</p>
          </div>
        </div>
        <div className={styles.social}>
          <a
            className={styles.iconLink}
            href="https://github.com/leekarho"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className={styles.iconLink}
            href="https://www.linkedin.com/in/kar-ho-lee-2b4614156/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>
    </>
  );
}
