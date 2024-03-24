import React from "react";
import "./frame.scss";
import useSidebarStore from "../../Store/store";

interface FrameProps {
  borderColor: string;
  title: string;
  backgroundColor: string;
  textDecorationColor:string;
}

const Frame: React.FC<FrameProps> = ({ borderColor, title, backgroundColor, textDecorationColor}) => {
  const { isOpen } = useSidebarStore();
  const blurStyle = isOpen ? { filter: "blur(5px)" } : {};
    return (
      <div className="frame-container" style={{ borderColor, backgroundColor,...blurStyle}}>
        <h1 style={{ textDecorationColor }}>{title}</h1>
      </div>
    );
  };

export default Frame;
