import { useNavigate } from "react-router-dom";
import React, { ReactNode } from "react";
import "./frame.scss";
import homeIconVector from "../../assets/images/home-icon-vector.png";

interface FrameProps {
  borderColor: string;
  backgroundColor: string;
  title: string;
  textDecorationColor: string;
  children?: ReactNode;
}

const Frame: React.FC<FrameProps> = ({ borderColor, backgroundColor, title, textDecorationColor, children }) => {
  const navigate = useNavigate();
  const handleHomeButton = () => {
    navigate("/");
  };
  return (
    <div className="frame-container" style={{ borderColor, backgroundColor }}>
            <img src={homeIconVector} alt="icon" className="homeIconResume" onClick={handleHomeButton} />
      <h1 style={{ textDecorationColor: textDecorationColor }}>{title}</h1>

      {children}
    </div>
  );
};

export default Frame;
