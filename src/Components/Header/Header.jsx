import styles from "./Header.module.css";

export default function Header() {
  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   section.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      <header id="nav" className={styles.container}>
        <h1>Kar-ho Lee: Software Developer</h1>
        <ul className={styles.linksContainer}>
          <NavLink link="#about" label="About"/>
          <NavLink link="#skills" label="Skills"/>
          <NavLink link="#projects" label="Projects"/>
          <NavLink link="#contact" label="Contact"/>
        </ul>
      </header>
    </>
  );
}

function NavLink(props) {
  return (
    <li className={styles.navLink}>
      <a className={styles.link} href={props.link}>{props.label}</a>
    </li>
  );
}
