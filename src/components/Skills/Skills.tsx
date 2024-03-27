import { useState } from "react";
import Frame from "../Frame/Frame";
import "./skills.scss";
import softSkills from "../../assets/images/soft-skills.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";
import htmlLogo from "../../assets/it-icons/htmlLogo.png"
import cssLogo from "../../assets/it-icons/cssLogo.png"
import jsLogo from "../../assets/it-icons/JavaScriptLogo.png"
import tsLogo from "../../assets/it-icons/tsLogo.png"
import sassLogo from "../../assets/it-icons/sassLogo.png"
import reactLogo from "../../assets/it-icons/reactLogo.png"
import nodeLogo from "../../assets/it-icons/nodeJsLogo.png"
import terminalLogo from "../../assets/it-icons/terminalLogo.png"
import gitHubLogo from "../../assets/it-icons/gitHubLogo.png"
import figmaLogo from "../../assets/it-icons/figmaLogo.png"
import gimpLogo from "../../assets/it-icons/gimpLogo.png"
import trelloLogo from "../../assets/it-icons/trelloLogo.png"
import agileLogo from "../../assets/it-icons/agileLogo.png"
import officeLogo from "../../assets/it-icons/officeLogo.png"
import obsLogo from "../../assets/it-icons/obsLogo.png"
import apiLogo from "../../assets/it-icons/apiLogo.png"


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
      imageUrl:trelloLogo,
      title: "Trello",
      description: "★★★★★",
    },
    {
      imageUrl:agileLogo,
      title: "Agile",
      description: "★★★★",
    },
    {
      imageUrl:officeLogo,
      title: "Microsoft Office",
      description: "★★★★",
    },
    {
      imageUrl:obsLogo,
      title: "Obs studio",
      description: "★★★",
    },
    {
      imageUrl:apiLogo,
      title: "Api",
      description: "★★★★",
    },
    
  ];

  const [showDescription, setShowDescription] = useState<boolean[]>(Array(cards.length).fill(false));

  const handleMouseEnter = (index: number) => {
    setShowDescription(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index: number) => {
    setShowDescription(prevState => {
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
        <section className="section2-skills">
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

          {currentSection === 1 && (
            <React.Fragment>
              <FontAwesomeIcon icon={faChevronUp} onClick={() => setCurrentSection(0)} id="scroll-up-arrow-itSkills" />
              <FontAwesomeIcon icon={faChevronDown} onClick={() => setCurrentSection(2)} id="scroll-down-arrow-itSkills" />
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
