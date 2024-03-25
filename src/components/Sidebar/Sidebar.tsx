import React from "react";
import "./sidebar.scss";
import useSidebarStore from "../../Store/store";
import logoALP from "../../assets/images/logoALP.png";

type Props = {
  onSelectComponent: (componentName: string) => void;
};

const Sidebar = ({ onSelectComponent }: Props) => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  const handleItemClick = (componentName: string) => {
    onSelectComponent(componentName);
    if (isOpen === true) {
      toggleSidebar();
    }
  };

  return (
    <>
      {" "}
      <div className={`sidebar-wrapper ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-container">
          <li onClick={() => handleItemClick("AboutMe")}>
            About Me <span className="label blue"></span>{" "}
          </li>
          <li onClick={() => handleItemClick("Education")}>
            Education <span className="label red"></span>{" "}
          </li>
          <li onClick={() => handleItemClick("Experiences")}>
            Experiences <span className="label green"></span>{" "}
          </li>
          <li onClick={() => handleItemClick("Skills")}>
            Skills<span className="label orange"></span>{" "}
          </li>
          <li onClick={() => handleItemClick("Portfolio")}>
            Porftolio <span className="label purple"></span>{" "}
          </li>
          <li onClick={() => handleItemClick("Extra")}>
            Extra <span className="label brown"></span>{" "}
          </li>
        </ul>

        <button onClick={toggleSidebar} className="toggleSidebar-button">
          {isOpen ? "<<" : ">>"}
        </button>
        <div className={` ${isOpen ? "overlay" : "hidden"}`}>
          <img src={logoALP} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
