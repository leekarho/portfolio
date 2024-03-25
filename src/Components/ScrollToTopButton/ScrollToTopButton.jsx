import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.css";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setShowScroll(true) : setShowScroll(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  }

  return (
    <>
      {showScroll ? (
        <div className={styles.scrollTop} onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      ) : null}
    </>
  );
}
