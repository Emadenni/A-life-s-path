import React from "react";
import "./frame.scss";

interface FrameProps {
  borderColor: string;
  title: string;
  backgroundColor: string;
  textDecorationColor:string;
}

const Frame: React.FC<FrameProps> = ({ borderColor, title, backgroundColor, textDecorationColor}) => {
    return (
      <div className="frame-container" style={{ borderColor, backgroundColor}}>
        <h1 style={{ textDecorationColor }}>{title}</h1>
      </div>
    );
  };

export default Frame;
