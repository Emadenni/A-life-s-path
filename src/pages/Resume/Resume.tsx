import React from "react";
import "./resume.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Frame from "../../components/Frame/Frame";
import AboutMe from "../../components/AboutMe/AboutMe";
import Education from "../../components/Education/Education";
import Experiences from "../../components/Experiences/Experiences";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";
import Extra from "../../components/Extra/Extra";
type Props = {};

const Resume = (props: Props) => {
  return (
    <div className="resume-container">
      <Sidebar />
       <Frame borderColor="rgba(11, 11, 11, 0.2)" backgroundColor="rgba(11, 11, 11, 0.2)" title="Main Informations" />
      {/*      <AboutMe /> */}
      {/* <Education /> */}
      {/*  <Experiences /> */}
      {/* <Skills /> */}
      {/*      <Portfolio /> */}
    {/*   <Extra /> */}
    </div>
  );
};

export default Resume;
