import React from "react";
import "./frame.scss";

interface FrameProps {
  borderColor: string;
  title: string;
  backgroundColor: string;
  
}

const Frame: React.FC<FrameProps> = ({ borderColor, title, backgroundColor }) => {
    return (
      <div className="frame-container" style={{ borderColor, backgroundColor }}>
        <h1>{title}</h1>
      </div>
    );
  };

export default Frame;
