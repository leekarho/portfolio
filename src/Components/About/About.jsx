import styles from "./About.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <>
      <section id="about" className={styles.container}>
        <h2>ABOUT</h2>
        <div className={styles.aboutMe}>
          <div className={styles.image} />
          <div className={styles.textContainer}>
            <p>
              Hello, and welcome to my portfolio page. My name is{" "}
              <span style={{ color: "#69c7c7" }}>Kar-ho</span>, a job-ready
              full-stack developer. I am a Northcoders software engineer
              graduate, with a passion for learning and building software
              applications. The course was a great experience and a lot of fun:
              if I could, I would do it all over again!
            </p>
            <p>
              Away from the computer, I am a sports enthusiast and a keen
              traveller. I can often be found practising my serve on the tennis
              court.
            </p>
            <div className={styles.contact}>
              <a
                className={styles.iconLink}
                href="https://github.com/leekarho"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className={styles.iconLink}
                href="https://github.com/leekarho"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
