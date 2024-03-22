import React from "react";
import { useState } from "react";
import "./sidebar.scss";

type Props = {};

const Sidebar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar-wrapper ${isOpen ? 'open' : ''}`}>
      <ul className="sidebar-container">
        <li>About Me <span className="label blue"></span> </li> 
        <li>Education <span className="label red"></span> </li>
        <li>Experiences <span className="label green"></span> </li>
        <li>Skills<span className="label orange"></span> </li>
        <li>Porftolio <span className="label purple"></span> </li>
        <li>Extra <span className="label brown"></span> </li>
      </ul>

      <button onClick={toggleSidebar} className="toggleSidebar-button">
      {isOpen ? '<<' : '>>'}
      </button>
      </div>
    </>
  );
};

export default Sidebar;
