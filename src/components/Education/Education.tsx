import React, { useState } from "react";
import Frame from "../Frame/Frame";
import "./education.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import coursePlan from "../../assets/images/course-plan.png";
import "@fortawesome/fontawesome-free/css/all.css";

type Section = {
  title: string;
  content: JSX.Element;
};

const Education = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections: Section[] = [
    {
      title: "Section 1",
      content: (
        <section className="section1">
          <p>
            I am graduated and qualified as a Technical Specialist in Tourism and Hospitality Services with a
            specialization in front-office (high school level).
          </p>
          <ul>
            <li>
              School: <br />
              <span>
                "S.Savioli" professional hotel institute <br /> Riccione (Italy)
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
          {currentSection === 0 && (
            <FontAwesomeIcon icon={faChevronDown} onClick={() => setCurrentSection(1)} id="scroll-down-arrow" />
          )}
        </section>
      ),
    },
    {
      title: "Section 2",
      content: (
        <section className="section2">
          <p>
            Between 2020 and 2023, I undertook a course of study related to the Swedish language and culture through the
            following courses attended at CENTRUM FÖR VUXENUTBILDNING in Linköping:
          </p>
          <ul>
            <li>
              SFI: <br />
              <span>SFI C, SFI D</span>
            </li>
            <li>
              BASIC LEVEL:
              <br />
              <span>SVA Grund 1,2,3 and 4</span>
            </li>
            <li>
              BASIC LEVEL:
              <br />
              <span>Samhällskunskap</span>
            </li>
            <li>
              HIGH SCHOOL LEVEL: <br />
              <span> SVA 1 and SVA 2</span>
            </li>
          </ul>
          {currentSection === 1 && (
            <React.Fragment>
              <FontAwesomeIcon icon={faChevronUp} onClick={() => setCurrentSection(0)} id="scroll-up-arrow" />
              <FontAwesomeIcon icon={faChevronDown} onClick={() => setCurrentSection(2)} id="scroll-down-arrow" />
            </React.Fragment>
          )}
        </section>
      ),
    },
    {
      title: "Section 3",
      content: (
        <section className="section3">
          <p>
            Since 2022, I started to focus on IT and programming, initially as a self-learner. From February 2023
            onward, I embarked on an academic path through the following courses:
          </p>
          <ul>
            <li>
              WEBBUTVECKLING 1: <br />
              <span>High School level at NTI-Skolan with grade :B</span>
            </li>
            <li>
              WEBBUTVECKLING 2: <br />
              <span>High School level at NTI-Skolan with grade :A</span>
            </li>
          </ul>
          {currentSection === 2 && (
            <React.Fragment>
              <FontAwesomeIcon icon={faChevronUp} onClick={() => setCurrentSection(1)} id="scroll-up-arrow" />
              <FontAwesomeIcon icon={faChevronDown} onClick={() => setCurrentSection(3)} id="scroll-down-arrow" />
            </React.Fragment>
          )}
        </section>
      ),
    },
    {
      title: "Section 4",
      content: (
        <section className="section4">
          <p>
            Since 2022, I started to focus on IT and programming, initially as a self-learner. From February 2023
            onward, I embarked on an academic path through the following courses:
          </p>
          <ul>
            <li>
              BFU: <br />
              <span> Preparation course at Göteborgsfolkuniversitet inherent HTML, CSS and JS</span>
            </li>
            <li>
              JAVASCRIPTUTVECKLARE:
              <br />
              <span>YH/Göteborgsfolkusiversitet (it will end June 2025)</span>
            </li>
          </ul>
          {currentSection === 3 && (
            <React.Fragment>
              <FontAwesomeIcon icon={faChevronUp} onClick={() => setCurrentSection(2)} id="scroll-up-arrow" />
              <FontAwesomeIcon icon={faChevronDown} onClick={() => setCurrentSection(4)} id="scroll-down-arrow" />
            </React.Fragment>
          )}
        </section>
      ),
    },
    {
      title: "Section 5",
      content: (
        <section className="section5">
          <p>Courses included in my current YH's education:</p>
          <img src={coursePlan} alt="course-plan" className="coursePlan-img" />
          {currentSection === 4 && (
            <React.Fragment>
              <FontAwesomeIcon icon={faChevronUp} onClick={() => setCurrentSection(3)} id="scroll-up-arrow" />
              <FontAwesomeIcon icon={faChevronDown} onClick={() => setCurrentSection(5)} id="scroll-down-arrow" />
            </React.Fragment>
          )}
        </section>
      ),
    },
    {
      title: "Section 6",
      content: (
        <section className="section6">
          <p>At the end of the education I will be qualified to cover the following roles:</p>
          <ul>
            <li>Backend developer with JavaScript</li>
            <li>Frontend developer with JavaScript</li>
            <li>IT consultant application programmer</li>
            <li>IT consultant database development</li>
            <li>IT consultant system development</li>
            <li>IT consultant web and multimedia</li>
          </ul>
          {currentSection === 5 && (
            <React.Fragment>
              <FontAwesomeIcon icon={faChevronUp} onClick={() => setCurrentSection(4)} id="scroll-up-arrow" />
            </React.Fragment>
          )}
        </section>
      ),
    },
  ];

  return (
    <div className="education-wrapper">
      <Frame
        borderColor="  rgba(191, 25, 25, 0.02)"
        backgroundColor="  rgba(191, 25, 25, 0.04)"
        title="Education"
        textDecorationColor="#bf191999"
      />
      <div className="education-container">
        {sections.map((section, index) => (
          <React.Fragment key={index}>{index === currentSection && section.content}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Education;
