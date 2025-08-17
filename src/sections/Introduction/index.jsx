import { IntroComp, BtnStyle } from "./styles";
import Button from "../../components/Button";

function Introduction() {
  const onViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1mKyG-v6s5hy9DV6mFQ560jZJhl6XMYkR/view?usp=sharing",
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
        Front-End Developer, with a good understanding of ReactJS and the
        front-end eco-system, eagerly looking for good opportunities to learn
        and grow.
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
