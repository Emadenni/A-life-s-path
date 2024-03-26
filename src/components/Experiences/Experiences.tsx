import React, { useState } from "react";
import Frame from "../Frame/Frame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import coursePlan from "../../assets/images/course-plan.png";
import "@fortawesome/fontawesome-free/css/all.css";
import "./experiences.scss";

type Section = {
  title: string;
  content: JSX.Element;
};

const Experiences = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections: Section[] = [
    {
      title: "Section 1",
      content: (
        <section className="section1">
          <p>
            Throughout my life, I have been fortunate to experience a large variety of jobs. Each has held significant
            meaning in my life, but it would be unnecessary and redundant to list them all. I will limit myself to
            highlighting the most significant ones in the following pages.
          </p>

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
          <ul>
            <li>
              <a href="https://www.hotelninfeacattolica.it/">Hotel Ninfea </a>
              <br />
              <span>2004 - 2014 </span>Cattolica RN (Italy)
            </li>
            <li>
              <a href="https://www.hotelambasciatorimisano.com/">Hotel Ambasciatori </a>
              <br />
              <span> 2015 </span> Misano A.(Italy)
            </li>
            <li>
              <a href="https://www.tavernadelpescatore.it/">Taverna del pescatore </a>
              <br />
              <span>2015 - 2017 </span>Pesaro (Italy)
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
            ENTERTAINMENT: In 2009, almost by chance, I found myself in the world of gaming and entertainment. I was
            hired at the BINGO Beach and Beach in Riccione (Italy) as a <strong>waiter</strong>, later emerging as the{" "}
            <strong>assistant manager/team leader</strong> few years later. <br /> In this role, I had the opportunity
            to lead a team of up to 20 people.
          </p>

          <ul>
            <li>
              <a href="https://bingoriccione.wixsite.com/bingoriccione/">BINGO Beach and Beach</a>
              <br />
              <span>2009 - 2015 </span> Riccione(Italy)
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
            CONSTRUCTION: Another significant chapter in my work life has been in construction. At the age of 20, I
            worked as a <strong>naval plumber</strong> in the production of Ferretti Custom Line 97' yachts for
            approximately 2 years. Before working as a <strong>carpenter</strong> in Sweden for 5 years, I also gained
            experience as a <strong>painter</strong> and in roles involving <strong>masonry</strong> and{" "}
            <strong>demolition</strong>. <br /> <br />
            Below the most significant experiences in the in the branch:
          </p>
          <ul>
            <li>
              <a href="https://www.customline-yacht.com/en-US/">MTO - Custom Line </a>
              <br />
              <span>2006 - 2009 </span> Cattolica RN (Italy)(Italy)
            </li>
            <li>
              <a href="https://www.atvidabergshus.se/">ÅTVIDABERGSHUS </a>
              <br />
              <span>2018 - 2023</span> Åtvidaberg (Sweden)
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
          <p>
            NOW: At this moment, I am oriented in the field of IT, trying to channel as much energy as possible into
            turning a great passion into a profession. In the meantime, to support myself financially, I work the night
            shift at DB SCHENKER through Student Consulting.
          </p>
          <ul>
            <li>
              <a href="https://www.dbschenker.com/global">DB Schenker</a>
              <br />
              <span>2023 - Until completion of studies</span> Linköping (Sweden)
            </li>
            <li>
              <a href="https://custitude.shopmetrics.com/auth/index.asp#login">Mistery shopper</a>
              <br />
              <span>occasionally</span> All around Sweden
            </li>
          </ul>
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
          <p>
            I would like to repeat that I have selected the experiences that I considered most relevant. At the same
            time I would like to point out that <strong>every single experience</strong>, even the most insignificant, has enriched me in
            his own way. The work in general has shaped me a lot.
          </p> <br /> <br />
          
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
    <div className="experiences-wrapper">
      <Frame
        borderColor=" rgba(4, 90, 4, 0.02)"
        backgroundColor=" rgba(4, 90, 4, 0.04)"
        title="Experiences"
        textDecorationColor="#045a0499"
      />
      <div className="experiences-container">
        {sections.map((section, index) => (
          <React.Fragment key={index}>{index === currentSection && section.content}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
