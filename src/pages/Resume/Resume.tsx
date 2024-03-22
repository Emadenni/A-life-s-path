import React, { useState } from "react";
import "./resume.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import AboutMe from "../../components/AboutMe/AboutMe";
import Education from "../../components/Education/Education";
import Experiences from "../../components/Experiences/Experiences";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";
import Extra from "../../components/Extra/Extra";

const Resume = () => {
  const [selectedComponent, setSelectedComponent] = useState("AboutMe");

  const handleSelectComponent = (componentName: string) => {
    setSelectedComponent(componentName);
  };

  return (
    <div className="resume-container">
      <Sidebar onSelectComponent={handleSelectComponent} />
      <div className="selected-component">
        {selectedComponent === "AboutMe" && <AboutMe />}
        {selectedComponent === "Education" && <Education />}
        {selectedComponent === "Experiences" && <Experiences />}
        {selectedComponent === "Skills" && <Skills />}
        {selectedComponent === "Portfolio" && <Portfolio />}
        {selectedComponent === "Extra" && <Extra />}
      </div>
    </div>
  );
};

export default Resume;
