import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header id="nav" className={styles.container}>
        <h1>
          <span style={{ color: "#69c7c7" }}>Kar-ho Lee: </span>Software
          Developer
        </h1>
        <ul className={styles.linksContainer}>
          <NavLink link="#about" label="About" />
          <NavLink link="#skills" label="Skills" />
          <NavLink link="#projects" label="Projects" />
          <NavLink link="#contact" label="Contact" />
        </ul>
      </header>
    </>
  );
}

function NavLink(props) {
  return (
    <li className={styles.navLink}>
      <a className={styles.link} href={props.link}>
        {props.label}
      </a>
    </li>
  );
}
