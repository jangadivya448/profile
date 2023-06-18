import { useRef } from "react";
import useOnIntersect from "../../hooks/intersection";
import { Header } from "../Experience/styles";
import { ContectMeCon, ContctMe } from "./styles";

function Contact() {
  const contactRef = useRef(null);
  const show = useOnIntersect(contactRef);

  return (
    <ContectMeCon
      ref={contactRef}
      className={`lazy-hide ${show ? "lazy-show" : ""}`}
      id="contact-me"
    >
      <Header>Get In Touch</Header>
      <ContctMe>
        <p>I'm always open to new exciting opportunities and challenges.</p>
        <p>
          If you have any, please try to contact me with any one of the below
        </p>
        <div className="contact-wrp">
          <div className="contact">
            <span className="type">Mobile: </span>
            <a
              className="value"
              href="tel:+918096695836"
              target="_blank"
              rel="noreferrer"
            >
              +91 8096695836
            </a>
          </div>
          <div className="contact">
            <span className="type">Email: </span>
            <a
              className="value"
              href="mailto:aDivya@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              aDivya@gmail.com
            </a>
          </div>
          <div className="contact">
            <span className="type">LinkedIn: </span>
            <a
              className="value"
              href="https://www.linkedin.com/in/Divya-Janga-1089/"
              target="_blank"
              rel="noreferrer"
            >
              Divya-Janga-1089
            </a>
          </div>
        </div>
      </ContctMe>
    </ContectMeCon>
  );
}

export default Contact;
