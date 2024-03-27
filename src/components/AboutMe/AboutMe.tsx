import React from "react";
import Frame from "../Frame/Frame";
import "./aboutMe.scss";
import profilePic from "../../assets/images/profilePic.jpg";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div className="aboutMe-wrapper">
      <Frame
        borderColor=" rgb(0, 0, 255, 0.02)"
        backgroundColor=" rgb(0, 0, 255, 0.03)"
        title="About me"
        textDecorationColor="#0000ff99"
      />
      <div className="aboutMe-container">
        <img src={profilePic} alt="profile" />
        <p>
          My name is Emanuele De Negri, I am 37 years old, and I have recently embarked on my journey in the world of
          web development and programming. <br /> <br /> My goal is to dedicate as much time as possible to this great
          passion and turn it into a full-fledged career. The means I am using to achieve my goal include
          <span className="red"> skill development</span>,<span className="red"> perseverance</span>,
          <span className="red"> humility</span> and a <span className="red">thirst for knowledge</span>.
        </p>
        <ul>
          <div className="listPart1">
            <li>
              Name: <br />
              <span> Emanuele De Negri</span>
            </li>
            <li>
              Date of birth: <br />
              <span> 28/12/1986</span>
            </li>
            <li>
              Place of birth: <br />
              <span> Cava dei Tirreni SA (Italy)</span>
            </li>
          </div>
          <div className="listPart2">
            <li>
              Address: <br /> <span> Björkliden 122, 58665 Linköping</span>
            </li>
            <li>
              E-mail: <br />
              <span>
                {" "}
                <a href="mailto:emanuele.dng86@gmail.com">emanuele.dng86@gmail.com</a>
              </span>
            </li>
            <li>
              Tel.: <br />
              <span>
                <a href="tel:+46722116422">+46722116422</a>
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
