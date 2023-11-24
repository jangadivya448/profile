import { IntroComp, BtnStyle } from "./styles";
import Button from "../../components/Button";

function Introduction() {
  const onViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1sFRhLLPeE7HnV4A6O0gfA9faU2mzk8v7/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <IntroComp>
      <h3 className="my-name-is lazy-load">Hi, my name is</h3>
      <h1 className="name lazy-load">Divya Janga</h1>
      <h2 className="desg lazy-load">
        {"<>"} Software Developer {"</>"}
      </h2>
      <p className="description lazy-load">
        Eagerly looking for an entry-level software developer position and contribute my computer science knowledge, and logical skills in designing and developing complex software applications.
        <br />
        <span className="cur-cmp">
          {/* Currently, I'm working at{" "} */}
          <a href="https://campk12.com/" target="_blank" rel="noreferrer">
            {/* CampK12 */}
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
