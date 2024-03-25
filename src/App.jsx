import styles from "./App.module.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTopButton />
    </>
  );
}

export default App;
