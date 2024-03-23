import React from "react";
import Frame from "../Frame/Frame";
import "./aboutMe.scss";

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
        <p>
          My name is Emanuele De Negri, I am 37 years old, and I have recently embarked on my journey in the world of
          web development and programming in general. <br /> <br /> My goal is to dedicate as much time as possible to this great
          passion and turn it into a full-fledged career. The means I am using to achieve my goal include skill
          development, perseverance, humility, and a thirst for knowledge
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
