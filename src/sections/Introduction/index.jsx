import { IntroComp, BtnStyle } from "./styles";
import Button from "../../components/Button";

function Introduction() {
  const onViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1QvyeQWXNL3Z8iv68bosuv_7yPosJiddG/view?usp=sharing",
      "_blank",
    );
  };
  return (
    <IntroComp>
      <h3 className="my-name-is lazy-load">Hi, my name is</h3>
      <h1 className="name lazy-load">Divya Janga</h1>
      <h2 className="desg lazy-load">
        {"<>"}Front-End Developer {"</>"}
      </h2>
      <p className="description lazy-load">
        Detail-oriented Frontend Developer with 2+ years of experience
        designing responsive web applications using JavaScript, React, and
        modern UI frameworks. Skilled in building reusable components,
        integrating REST APIs, optimizing performance, and collaborating with
        cross-functional teams.
        <br />
        <span className="cur-cmp">
          Software Engineer at{" "}
          <a
            href="https://www.apexlawncompany.com/"
            target="_blank"
            rel="noreferrer"
          >
            Apex Lawn Company
          </a>
        </span>
        <span className="cur-cmp">
          Ex-Software Engineer at{" "}
          <a
            href="https://www.anutanetworks.com/"
            target="_blank"
            rel="noreferrer"
          >
            Anuta Networks
          </a>
        </span>
      </p>
      <Button
        className="lazy-load"
        css={BtnStyle}
        text={"View Resume"}
        onClick={onViewResume}
      />
    </IntroComp>
  );
}

export default Introduction;
