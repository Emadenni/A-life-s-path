import { useState } from "react";
import "./skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";
import htmlLogo from "../../assets/it-icons/htmlLogo.png";
import cssLogo from "../../assets/it-icons/cssLogo.png";
import jsLogo from "../../assets/it-icons/JavaScriptLogo.png";
import tsLogo from "../../assets/it-icons/tsLogo.png";
import sassLogo from "../../assets/it-icons/sassLogo.png";
import reactLogo from "../../assets/it-icons/reactLogo.png";
import nodeLogo from "../../assets/it-icons/nodeJsLogo.png";
import terminalLogo from "../../assets/it-icons/terminalLogo.png";
import gitHubLogo from "../../assets/it-icons/gitHubLogo.png";
import figmaLogo from "../../assets/it-icons/figmaLogo.png";
import gimpLogo from "../../assets/it-icons/gimpLogo.png";
import trelloLogo from "../../assets/it-icons/trelloLogo.png";
import agileLogo from "../../assets/it-icons/agileLogo.png";
import officeLogo from "../../assets/it-icons/officeLogo.png";
import obsLogo from "../../assets/it-icons/obsLogo.png";
import apiLogo from "../../assets/it-icons/apiLogo.png";

type Section = {
  title: string;
  content: JSX.Element;
};

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Skills: React.FC = () => {
  const cards: CardProps[] = [
    {
      imageUrl: htmlLogo,
      title: "HTML5",
      description: "★★★★★",
    },
    {
      imageUrl: cssLogo,
      title: "CSS3",
      description: "★★★★★",
    },
    {
      imageUrl: jsLogo,
      title: "JavaScript",
      description: "★★★★★",
    },
    {
      imageUrl: tsLogo,
      title: "TypeScript",
      description: "★★★★",
    },
    {
      imageUrl: reactLogo,
      title: "React",
      description: "★★★★",
    },
    {
      imageUrl: sassLogo,
      title: "Sass",
      description: "★★★★",
    },
    {
      imageUrl: nodeLogo,
      title: "NodeJs",
      description: "★★★",
    },
    {
      imageUrl: terminalLogo,
      title: "Terminal",
      description: "★★★",
    },
    {
      imageUrl: gitHubLogo,
      title: "GitHub",
      description: "★★★★",
    },
    {
      imageUrl: figmaLogo,
      title: "Figma",
      description: "★★★★★",
    },
    {
      imageUrl: gimpLogo,
      title: "Gimp",
      description: "★★★",
    },
    {
      imageUrl: trelloLogo,
      title: "Trello",
      description: "★★★★★",
    },
    {
      imageUrl: agileLogo,
      title: "Agile",
      description: "★★★★",
    },
    {
      imageUrl: officeLogo,
      title: "Microsoft Office",
      description: "★★★★",
    },
    {
      imageUrl: obsLogo,
      title: "Obs studio",
      description: "★★★",
    },
    {
      imageUrl: apiLogo,
      title: "Api",
      description: "★★★★",
    },
  ];

  const [showDescription, setShowDescription] = useState<boolean[]>(Array(cards.length).fill(false));

  const handleMouseEnter = (index: number) => {
    setShowDescription((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index: number) => {
    setShowDescription((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const [currentSection, setCurrentSection] = useState(0);
  const sections: Section[] = [
    {
      title: "Section 1",
      content: (
        <section className="section1-skills">
      <h2 className="title-soft-skills2">Soft <br />Skills</h2>

          <ul>
            <div className="soft-skills-box">
              <li>
                Excellent communication skills
                <span>
                  {" "}
                  In my career, I have placed great importance on communication and have considered it an added value.
                  Over the years, I have had the opportunity to put into practice communication techniques learned
                  during various studies.
                </span>
              </li>
              <li>
                Problem-solving and critical thinking{" "}
                <span>
                  In many of my roles, I've had to learn to think quickly and solve challenging problems efficiently,
                  even creatively. Over time, I've honed this skill by learning to integrate it with careful evaluation
                  when necessary.
                </span>
              </li>
            </div>
            <h2 className="title-soft-skills1">Soft <br />Skills</h2>
            <div className="soft-skills-box">
              <li>
                Teamwork and collaboration{" "}
                <span>
                  {" "}
                  I consider myself someone who enjoys working independently and autonomously. At the same time, I have
                  always been able to integrate positively within any team, carving out my specific role based on the
                  circumstances.
                </span>
              </li>
              <li>
                Time management and organization{" "}
                <span>
                  This, I believe, is my skill. I feel fulfilled when time and organization flow smoothly. I consider
                  myself predisposed to organization and planning, not only for myself but often for my collaborators,
                  as I have frequently observed.
                </span>
              </li>
            </div>
          </ul>

          {currentSection === 0 && (
            <FontAwesomeIcon icon={faChevronDown} onClick={() => setCurrentSection(1)} className="scroll-down-arrow" />
          )}
        </section>
      ),
    },
    {
      title: "Section 2",
      content: (
        <section>
          {currentSection === 1 && (
            <React.Fragment>
              <FontAwesomeIcon icon={faChevronUp} onClick={() => setCurrentSection(0)} className="scroll-up-arrow" />
            </React.Fragment>
          )}
          <div className="section2-skills">
            <h2>It skills</h2>
            <div className="cards-container">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="card"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <img src={card.imageUrl} alt="Immagine" />
                  <h3>{card.title}</h3>
                  {showDescription[index] && <p className="description">{card.description}</p>}
                </div>
              ))}
            </div>
          </div>
          {currentSection === 1 && (
            <React.Fragment>
              <FontAwesomeIcon
                icon={faChevronDown}
                onClick={() => setCurrentSection(2)}
                className="scroll-down-arrow"
              />
            </React.Fragment>
          )}
        </section>
      ),
    },
    {
      title: "Section 3",
      content: (
        <section className="section3">
          {currentSection === 2 && (
            <React.Fragment>
              <FontAwesomeIcon icon={faChevronUp} onClick={() => setCurrentSection(1)} className="scroll-up-arrow" />
            </React.Fragment>
          )}
          <p>
            EXTRA SKILLS: Throughout my years of work, I have developed considerable experience in driving various types
            of forklifts and operating an overhead crane.
          </p>
          <ul>
            <li>Forklift license</li>
            <li>Overhead crane license</li>
          </ul>

          {currentSection === 2 && (
            <React.Fragment>
              <FontAwesomeIcon
                icon={faChevronDown}
                onClick={() => setCurrentSection(3)}
                className="scroll-down-arrow"
              />
            </React.Fragment>
          )}
        </section>
      ),
    },
    {
      title: "Section 4",
      content: (
        <section className="section4">
          {currentSection === 3 && (
            <React.Fragment>
              <FontAwesomeIcon icon={faChevronUp} onClick={() => setCurrentSection(2)} className="scroll-up-arrow" />
            </React.Fragment>
          )}
          <p>
            LANGUAGES: Besides Italian, my mother tongue, I speak Swedish at a good level, which I use in everyday life
            and have deepened through some previously mentioned courses, as well as English, which I studied in high
            school and use daily as the primary language within my family.
          </p>
          <ul>
            <li>
              Italian<span> (mothertongue)</span>
            </li>
            <li>
              English<span> (fluent)</span>
            </li>
            <li>
              Swedish<span> (fluent)</span>
            </li>
          </ul>
        </section>
      ),
    },
  ];

  return (
    <div className="skills-container">
      {sections.map((section, index) => (
        <React.Fragment key={index}>{index === currentSection && section.content}</React.Fragment>
      ))}
    </div>
  );
};

export default Skills;
