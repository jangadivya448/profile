import { IntroComp, BtnStyle } from "./styles";
import Button from "../../components/Button";

function Introduction() {
  const onViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1hAxryFf6xu1mm9ymlYijxqVpuxxGZ7A8/view?usp=sharing",
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
        Frontend Developer with around 2.5 years of hands-on experience in React, JS, and modern UI frameworks, specializing in responsive web applications, reusable components, REST API integration, and
        performance optimization. Experienced in implementing SEO best practices - including Core Web
        Vitals optimization - to improve search visibility and site performance. Currently expanding into the
        MERN stack with Node.js, Express.js, and MongoDB to grow toward full-stack development.

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
          Ex-Software Developer at{" "}
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
