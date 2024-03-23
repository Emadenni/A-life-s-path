import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button/Button";
import profilePic from "../../assets/images/profilePic.jpg";
import profileName from "../../assets/images/profileName.png";
import "./intro.scss";
type Props = {};

const Intro = (props: Props) => {
  const navigate = useNavigate();

  const handleContinueButton = () => {
    navigate("/resume");
  }

  return (
    <div className="intro-container">
      <h1>Welcome!</h1>
      <div className="intro-container__box">
        <p>
          “In the following pages, I am going to introduce my self through my professional and personal experiences. “
        </p>
      </div>

      <Button customClassName="custom-button-intro" text="Continue" onClick={handleContinueButton} />
      <img src={profilePic} alt="profile-picture" className="intro-container__profilePic" />
      <img src={profileName} alt="profile-name" className="intro-container__profileName" />
    </div>
  );
};

export default Intro;
