import React, { useState } from "react";
import Frame from "../Frame/Frame";
import "./education.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

type Props = {};

const Education = (props: Props) => {
  const [showSection2, setShowSection2] = useState(false);
  const [showSection3, setShowSection3] = useState(false);

  const scrollDown = () => {
    setShowSection2(true);
  };

  return (
    <div className="education-wrapper">
      <Frame
        borderColor="  rgba(191, 25, 25, 0.02)"
        backgroundColor="  rgba(191, 25, 25, 0.04)"
        title="Education"
        textDecorationColor="#bf191999"
      />
      <div className="education-container">
        <section className={showSection2 ? "section1 hidden" : "section1"}>
          <p>
            I am graduated and qualified as a Technical Specialist in Tourism and Hospitality Services with a
            specialization in front-office (high school level).
          </p>

          <ul>
            <li>
              School: <br />
              <span>
                "S.Savioli" professional hotel institute <br /> - Riccione (Italy)
              </span>
            </li>

            <li>
              Year: <br />
              <span>2005</span>
            </li>
            <li>
              Grade: <br />
              <span>73/100</span>
            </li>
          </ul>
          {!showSection2 && <FontAwesomeIcon icon={faChevronDown} onClick={scrollDown} id="scroll-down-arrow" />}
        </section>
        {showSection2 && (
          <section className="section2">
            <p>Between 2020 and 2023, I undertook a course of study related to the Swedish language and culture through the following courses attended at CENTRUM FÖR VUXENUTBILDNING in Linköping:</p>

            <ul>
              <li>
              SFI: <br />
                <span> SFI C, SFI D</span>
              </li>
              <li>
              BASIC LEVEL:<br />
                <span>SVA Grund 1,2,3 and 4</span>
              </li>
              <li>
              BASIC LEVEL:<br />
                <span>Samhällskunskap</span>
              </li>
              <li>
              HIGH SCHOOL LEVEL: <br />
                <span> SVA 1 and SVA 2</span>
              </li>
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default Education;
