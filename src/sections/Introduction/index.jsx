import { IntroComp, BtnStyle } from "./styles";
import Button from "../../components/Button";

function Introduction() {
  const onViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1FK_bVbTaiy1xkChyhb4rMG1pwufkZZBc/view?usp=sharing",
      "_blank",
    );
  };
  return (
    <IntroComp>
      <h3 className="my-name-is lazy-load">Hi, my name is</h3>
      <h1 className="name lazy-load">Divya Janga</h1>
      <h2 className="desg lazy-load">
        {"<>"}Developer | SEO Analyst {"</>"}
      </h2>
      <p className="description lazy-load">
        Performance Marketing-focused professional with 2.5 years of frontend
        experience, including 1.7 years in Software Development and SEO. Skilled
        in GA4, GTM, Google Ads, Meta Ads, technical SEO, Core Web Vitals,
        landing-page optimization, and conversion tracking. Leverage my React
        and JavaScript background to connect campaigns, user behavior, and
        conversions for data-driven growth.
        <br />
        <span className="cur-cmp">
          Software Engineer | SEO Analyst at{" "}
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
