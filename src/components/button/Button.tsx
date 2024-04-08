import React from "react";
import "./button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  customClassName?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick,customClassName }) => {
  return (
    <div>
     <button className={`generic-button ${customClassName}`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
