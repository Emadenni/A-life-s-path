import { useState } from "react";
import Frame from "../Frame/Frame";
import "./skills.scss";
import softSkills from "../../assets/images/soft-skills.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";

type Section = {
  title: string;
  content: JSX.Element;
};

const Skills = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections: Section[] = [
    {
      title: "Section 1",
      content: (
        <section className="section1">
          <img src={softSkills} alt="soft-skills" />

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
            TOURISM - Having grown up in a renowned Italian tourist area (Riviera Romagnola), I have been employed for
            several years in the tourism sector. Specifically, I have gained experience as a <strong> bartender</strong>
            , <strong>waiter</strong> , and
            <strong> receptionist</strong> . Here are some of the companies for which I have worked in the tourism
            sector:
          </p>

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
            ENTERTAINMENT: In 2009, almost by chance, I found myself in the world of gaming and entertainment. I was
            hired at the BINGO Beach and Beach in Riccione (Italy) as a <strong>waiter</strong>, later emerging as the{" "}
            <strong>assistant manager/team leader</strong> few years later. <br /> In this role, I had the opportunity
            to lead a team of up to 20 people.
          </p>

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
            CONSTRUCTION: Another significant chapter in my work life has been in construction. At the age of 20, I
            worked as a <strong>naval plumber</strong> in the production of Ferretti Custom Line 97' yachts for
            approximately 2 years. Before working as a <strong>carpenter</strong> in Sweden for 5 years, I also gained
            experience as a <strong>painter</strong> and in roles involving <strong>masonry</strong> and{" "}
            <strong>demolition</strong>. <br /> <br />
            Below the most significant experiences in the in the branch:
          </p>

          {currentSection === 3 && (
            <React.Fragment>
              <FontAwesomeIcon icon={faChevronUp} onClick={() => setCurrentSection(2)} id="scroll-up-arrow" />
              <FontAwesomeIcon icon={faChevronDown} onClick={() => setCurrentSection(4)} id="scroll-down-arrow" />
            </React.Fragment>
          )}
        </section>
      ),
    },
  ];
  return (
    <div className="skills-wrapper">
      <Frame
        borderColor=" rgba(215, 93, 18, 0.02"
        backgroundColor=" rgba(215, 93, 18, 0.04"
        title="Skills"
        textDecorationColor="#d75d1299"
      />
      <div className="skills-container">
        {sections.map((section, index) => (
          <React.Fragment key={index}>{index === currentSection && section.content}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Skills;
