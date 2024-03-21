import "./Header.css";

export default function Header() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    section.scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <section id="nav">
       <ul>
        <li>
            <a href="#about" onClick={() => scrollToSection("about")}>About</a>
        </li>
        <li>
            <a href="#skills" onClick={() => scrollToSection("skills")}>Skills</a>
        </li>
        <li>
            <a href="#projects" onClick={() => scrollToSection("projects")}>projects</a>
        </li>
        <li>
            <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>
        </li>

       </ul>
      </section>
    </>
  );
}
