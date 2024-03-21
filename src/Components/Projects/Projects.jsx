import { FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import buddies from "../../assets/buddies.jpeg";
import ncNews from "../../assets/ncNews.png";
import ncNewsApi from "../../assets/ncNewsApi.png";
import { SiCss3, SiExpress, SiFirebase, SiJavascript, SiPostgresql } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function Projects() {
  return (
    <>
      <div>
        <img src={ncNews} alt="Screenshot of Nc News" />
        <p>Nc News</p>
        <div>
          <div>
            <FaReact />
            <p>React</p>
          </div>
          <div>
            <SiJavascript />
            <p>Javascript</p>
          </div>
          <div>
            <FaHtml5 />
            <p>HTML</p>
          </div>
          <div>
            <SiCss3 />
            <p>CSS</p>
          </div>
        </div>
      </div>
      <div>
        <img src={ncNewsApi} alt="Screenshot of Nc News Api" />
        <p>Nc News Api</p>
        <div>
          <div>
            <FaNodeJs />
            <p>Node.js</p>
          </div>
          <div>
            <SiExpress />
            <p>Express</p>
          </div>
          <div>
            <SiPostgresql />
            <p>PostreSQL</p>
          </div>
        </div>
      </div>
      <div>
        <img src={buddies} alt="Screenshot of Buddies app" />
        <p>Buddies</p>
        <div>
          <div>
            <TbBrandReactNative />
            <p>React Native</p>
          </div>
          <div>
            <SiFirebase />
            <p>Firebase</p>
          </div>
          <div>
            <FaHtml5 />
            <p>HTML</p>
          </div>
          <div>
            <SiCss3 />
            <p>CSS</p>
          </div>
        </div>
      </div>
    </>
  );
}
