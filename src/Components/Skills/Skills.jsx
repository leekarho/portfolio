import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiJest,
  SiPostgresql,
} from "react-icons/si";
import { FaGit, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";


export default function Skills() {
  return (
    <>
      <div>
        <SiJavascript />
        <p>Javascript</p>
      </div>
      <div>
        <FaNodeJs />
        <p>Node.js</p>
      </div>
      <div>
        <SiJest />
        <p>Jest</p>
      </div>
      <div>
        <FaReact />
        <p>React</p>
      </div>
      <div>
        <TbBrandReactNative />
        <p>React Native</p>
      </div>
      <div>
        <SiExpress />
        <p>Express</p>
      </div>
      <div>
        <SiFirebase />
        <p>Firebase</p>
      </div>
      <div>
        <SiPostgresql />
        <p>PostreSQL</p>
      </div>
      <div>
        <FaGit />
        <p>Git</p>
      </div>
      <div>
        <FaHtml5 />
        <p>HTML</p>
      </div>
      <div>
        <SiCss3 />
        <p>CSS</p>
      </div>
    </>
  );
}
