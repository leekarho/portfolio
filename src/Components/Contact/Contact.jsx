import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <>
      <section id="contact" ref={ref}>
        <h2>CONTACT</h2>
        <motion.div
          className={styles.container}
          initial={{ x: -200 }}
          animate={inView ? { x: 0 } : { x: -100 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
        <motion.div
          className={styles.social}
          initial={{ x: -100 }}
          animate={inView ? { x: 0 } : { x: -100 }}
        >
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
        </motion.div>
      </section>
    </>
  );
}
