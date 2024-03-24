import styles from "./Skills.module.css";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJest,
  SiPostgresql,
  SiTypescript
} from "react-icons/si";
import { FaGit, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

export default function Skills() {
  return (
    <>
      <section id="skills" className={styles.container}>
        <h2>
          <span style={{ color: "#69c7c7" }}> SKILLS</span>
        </h2>
        <div className={styles.techSection}>
          <SkillBadge Icon={SiJavascript} label="JavaScript" />
          <SkillBadge Icon={FaNodeJs} label="Node.js" />
          <SkillBadge Icon={SiTypescript} label="Typescript" />
          <SkillBadge Icon={SiJest} label="Jest" />
          <SkillBadge Icon={FaReact} label="React" />
          <SkillBadge Icon={TbBrandReactNative} label="React Native" />
          <SkillBadge Icon={SiExpress} label="Express" />
          <SkillBadge Icon={SiFirebase} label="Firebase" />
          <SkillBadge Icon={SiPostgresql} label="PostreSQL" />
          <SkillBadge Icon={FaGit} label="Git" />
          <SkillBadge Icon={FaHtml5} label="HTML" />
          <SkillBadge Icon={SiCss3} label="CSS" />
        </div>
      </section>
    </>
  );
}

function SkillBadge(props) {
  const Icon = props.Icon;

  return (
    <div className={styles.badge}>
      <Icon />
      <h5>{props.label}</h5>
    </div>
  );
}
