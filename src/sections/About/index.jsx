import { useRef } from "react";
import useOnIntersect from "../../hooks/intersection";
import { Header } from "../Experience/styles";
import { AboutMeCont, AboutCont } from "./styles";
import me from "../../assets/pngs/DJ4.jpg";

function AboutMe() {
  const aboutRef = useRef(null);
  const show = useOnIntersect(aboutRef, 0.2);
  return (
    <AboutMeCont
      ref={aboutRef}
      className={`lazy-hide ${show ? "lazy-show" : ""}`}
      id="about-me"
    >
      <Header>About Me</Header>
      <AboutCont>
        <div className="prf-pic">
          <img src={me} alt="my profile pic" className="dp" />
          <span className="border-anim"></span>
        </div>
        <div className="prf-det">
          <p>
            Hello, my name is <b>Divya Janga</b>. I am a 2023 graduate and a
            passionate web developer who enjoys building web applications using
            the <b>MERN</b> stack.
          </p>

          <p>
            I enjoy learning new technologies and applying them in my work. I
            take responsibility for my tasks and always strive to improve my
            skills.
          </p>

          <p>
            Apart from coding, I enjoy photography, listening to music, and
            watching movies.
          </p>
        </div>
      </AboutCont>
    </AboutMeCont>
  );
}

export default AboutMe;
