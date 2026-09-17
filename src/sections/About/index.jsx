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
            I don't just build websites — I build digital experiences designed
            to be discovered, engaged with, and converted.
          </p>

          <p>
            Hi, I'm <b>Divya Janga</b>, a 2023 Computer Science Engineering
            graduate. I enjoy building responsive, user-friendly web
            applications.
          </p>

          <p>
            Alongside development, I've developed a strong interest in
            <b> Performance Marketing</b>, particularly{" "}
            <b>SEO, Google Ads, Meta Ads, GA4</b>, and <b>Google Tag Manager</b>
          </p>

          <p>
            I'm a curious learner who enjoys solving problems, exploring new
            technologies, and continuously improving through every project I
            work on.
          </p>

          <p>
            Outside of work, I enjoy photography, listening to music, and
            watching movies.
          </p>
        </div>
      </AboutCont>
    </AboutMeCont>
  );
}

export default AboutMe;
