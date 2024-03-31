import { useState } from "react";
import Frame from "../Frame/Frame";
import "./extra.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
import React from "react";
import Playlist from "../../Playlist";

type Section = {
  title: string;
  content: JSX.Element;
};

const Extra: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections: Section[] = [
    {
      title: "Section 1",
      content: (
        <section className="section1-extra">
          
          <p>
            <strong>MY COMFORT ZONE:</strong> First and foremost, I am the proud father of{" "}
            <span className="lightRed">Martin</span> (7 years old) and<span className="lightRed"> Anastasia </span>(3
            years old), as well as the husband of <span className="lightRed">Marija</span>. Additionally,
            <span className="lightRed"> Kaya </span>, a wonderful female Labrador, has recently joined us, . Ours is a
            multicultural family; I am Italian, my wife is North Macedonian, we live in Sweden, but we primarily speak
            English among ourselves, and we ensure that this is an added value.
          </p>
          <img src="https://picsum.photos/350/200" alt="pic" className="comfort-zone-img" />
         

          {currentSection === 0 && (
            <FontAwesomeIcon icon={faChevronDown} onClick={() => setCurrentSection(1)} id="scroll-down-arrow-extra" />
          )}
        </section>
      ),
    },
    {
      title: "Section 2",
      content: (
        <section className="section2-extra">
          <p>
            <strong>WHAT I LIKE?:</strong> I am a big <span className="lightRed">football</span> lover and have played
            it for most of my life. I love <span className="lightRed"> music</span>, particularly progressive rock,
            roots and dub reggae, electronic music and trip hop. I enjoy <span className="lightRed">TV series and movies</span>,
            with thriller and pulp being my preferred genres. I feel at ease in <span className="lightRed">nature</span>
            , enjoying taking care of the <span className="lightRed">garden and hosting barbecue</span> gatherings.
            Occasionally, I indulge in cooking traditional dishes from my country. In the field of IT, aside from
            programming, I sometimes enjoy 'playing' with AI and graphics in general. Among other things, I like
            creating logos.
          </p>
          <Playlist />

          {currentSection === 1 && (
            <React.Fragment>
              <FontAwesomeIcon icon={faChevronUp} onClick={() => setCurrentSection(0)} id="scroll-up-arrow-extra" />
            </React.Fragment>
          )}
        </section>
      ),
    },
  ];
  return (
    <div className="extra-wrapper">
      <Frame
        borderColor=" rgba(45, 9, 9, 0.02)"
        backgroundColor="  rgba(45, 9, 9, 0.04)"
        title="Extra"
        textDecorationColor="#2d0909e3"
      />
      <div className="extra-container">
        {sections.map((section, index) => (
          <React.Fragment key={index}>{index === currentSection && section.content}</React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default Extra;
