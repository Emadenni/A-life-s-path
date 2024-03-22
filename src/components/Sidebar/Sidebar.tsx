import React, { useState } from "react";
import "./sidebar.scss";

type Props = {
  onSelectComponent: (componentName: string) => void;
};

const Sidebar = ({ onSelectComponent }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (componentName: string) => {
    onSelectComponent(componentName); // Comunica aResume quale componente deve essere visualizzato
  };

  return (
    <>
      <div className={`sidebar-wrapper ${isOpen ? 'open' : ''}`}>
      <ul className="sidebar-container">
        <li onClick={() => handleItemClick("AboutMe")}>About Me <span className="label blue"></span> </li> 
        <li onClick={() => handleItemClick("Education")}>Education <span className="label red"></span> </li>
        <li onClick={() => handleItemClick("Experiences")}>Experiences <span className="label green"></span> </li>
        <li onClick={() => handleItemClick("Skills")}>Skills<span className="label orange"></span> </li>
        <li onClick={() => handleItemClick("Portfolio")}>Porftolio <span className="label purple"></span> </li>
        <li onClick={() => handleItemClick("Extra")}>Extra <span className="label brown"></span> </li>
      </ul>

      <button onClick={toggleSidebar} className="toggleSidebar-button">
      {isOpen ? '<<' : '>>'}
      </button>
      </div>
    </>
  );
};

export default Sidebar;
