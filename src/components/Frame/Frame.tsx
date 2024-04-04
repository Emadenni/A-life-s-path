import React, { ReactNode } from "react";
import "./frame.scss";

interface FrameProps {
  borderColor: string;
  backgroundColor: string;
  title: string;
  textDecorationColor: string;
  children?: ReactNode; // Includiamo children nell'interfaccia
}

const Frame: React.FC<FrameProps> = ({ borderColor, backgroundColor, title, textDecorationColor, children }) => {
  return (
    <div className="frame-container" style={{ borderColor, backgroundColor }}>
      <h1 style={{ textDecorationColor: textDecorationColor }}>{title}</h1>
      {children}
    </div>
  );
};

export default Frame;
