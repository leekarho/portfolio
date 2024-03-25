import styles from "./Projects.module.css";
import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import buddies from "../../assets/buddies.jpeg";
import ncNews from "../../assets/ncNews.png";
import ncNewsApi from "../../assets/ncNewsApi.png";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  console.log(inView);
  return (
    <>
      <section id="projects">
        <h2>PROJECTS</h2>
        <motion.div
          className={styles.container}
          ref={ref}
          initial={{ x: -200 }}
          animate={inView ? { x: 0 } : { x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Project
            image={ncNews}
            alt="Screenshot of Nc News"
            title="Nc News"
            blurb="Social media forum, in the style of Reddit"
            languages={["react", "js", "html", "css"]}
            href="https://karho-nc-news.netlify.app/"
            githubHRef="https://github.com/leekarho/fe-nc-news"
            btn="Live"
          />

          <Project
            image={ncNewsApi}
            alt="Screenshot of Nc News Api"
            title="Nc News Api"
            blurb="Backend API which provides information to NC News"
            languages={["node", "express", "psql"]}
            href="https://nc-news-u31g.onrender.com/api"
            githubHRef="https://github.com/leekarho/be-nc-news"
            btn="Live"
          />

          <Project
            image={buddies}
            alt="Screenshot of Buddies app"
            title="Buddies"
            blurb="A mobile app, designed to simplify plant care"
            languages={["react native", "firebase", "html", "css"]}
            href="https://northcoders.com/project-phase/buddies"
            githubHRef="https://github.com/codertetianka/Buddies"
            btn="Demo video"
          />
        </motion.div>
      </section>
    </>
  );
}

function Project(props) {
  const languages = props.languages;

  return (
    <div className={styles.project}>
      <div className={styles.imageContainer}>
        <div className={styles.imageBordered}>
          <img className={styles.image} src={props.image} alt={props.alt} />
        </div>
      </div>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.blurb}>{props.blurb}</p>
      <div className={styles.languages}>
        {languages.map((language, index) => {
          let icon;
          switch (language) {
            case "js":
              icon = <SiJavascript />;
              break;
            case "react native":
              icon = <TbBrandReactNative />;
              break;
            case "firebase":
              icon = <SiFirebase />;
              break;
            case "html":
              icon = <FaHtml5 />;
              break;
            case "css":
              icon = <SiCss3 />;
              break;
            case "psql":
              icon = <SiPostgresql />;
              break;
            case "express":
              icon = <SiExpress />;
              break;
            case "node":
              icon = <FaNodeJs />;
              break;
            case "react":
              icon = <FaReact />;
              break;
          }

          return <div key={index}>{icon}</div>;
        })}
      </div>

      <div className={styles.btns}>
        <a className={styles.btn} href={props.href} target="_blank">
          {props.btn}
        </a>
        <a className={styles.btn} href={props.githubHRef} target="_blank">
          Github
        </a>
      </div>
    </div>
  );
}
