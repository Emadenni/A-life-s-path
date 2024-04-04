import { useState } from "react";
import "./resume.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import AboutMe from "../../components/AboutMe/AboutMe";
import Education from "../../components/Education/Education";
import Experiences from "../../components/Experiences/Experiences";
import Skills from "../../components/Skills/Skills";
import Portfolio from "../../components/Portfolio/Portfolio";
import Extra from "../../components/Extra/Extra";
import Frame from "../../components/Frame/Frame";
import useSidebarStore from "../../Store/store";
import Chat from "../../Chat";

const Resume = () => {
  const [selectedComponent, setSelectedComponent] = useState("AboutMe");
  const { isOpen } = useSidebarStore();

  const handleSelectComponent = (componentName: string) => {
    setSelectedComponent(componentName);
  };

  // Definisci le props per il componente Frame in base al componente selezionato
  let frameProps = {};
  switch (selectedComponent) {
    case "AboutMe":
      frameProps = {
        borderColor: " rgb(0, 0, 255, 0.02)",
        backgroundColor: " rgb(0, 0, 255, 0.06)",
        title: "About me",
        textDecorationColor: "#0000ff99",
      };
      break;
    case "Education":
      frameProps = {
        borderColor: "  rgba(191, 25, 25, 0.02)",
        backgroundColor: "  rgba(191, 25, 25, 0.04)",
        title: "Education",
        textDecorationColor: "#bf191999",
      };
      break;

    case "Experiences":
      frameProps = {
        borderColor: " rgba(4, 90, 4, 0.02)",
        backgroundColor: " rgba(4, 90, 4, 0.024)",
        title: "Experiences",
        textDecorationColor: "#045a0499",
      };

      break;
    case "Skills":
      frameProps = {
        borderColor: " rgba(215, 93, 18, 0.02",
        backgroundColor: " rgba(215, 93, 18, 0.04",
        title: "Skills",
        textDecorationColor: "#d75d1299",
      };

      break;
    case "Portfolio":
      frameProps = {
        borderColor: "rgba(123, 14, 125, 0.02",
        backgroundColor: " rgba(123, 14, 125, 0.04",
        title: "Portfolio",
        textDecorationColor: "#7b0e7d99",
      };

      break;
    case "Extra":
      frameProps = {
        borderColor: " rgba(45, 9, 9, 0.02)",
        backgroundColor: "  rgba(45, 9, 9, 0.04)",
        title: "Extra",
        textDecorationColor: "#2d0909e3",
      };

      break;
    // Aggiungi altri casi per gli altri componenti selezionati
    default:
      frameProps = {}; // Default props
  }

  return (
    <div className={`resume-container ${isOpen ? "sidebar-open" : ""}`}>
      <Sidebar onSelectComponent={handleSelectComponent} />
      <div className={`selectedComponent ${isOpen ? "sidebar-open" : ""}`}>
        <Frame borderColor={""} backgroundColor={""} title={""} textDecorationColor={""} {...frameProps}>
          {selectedComponent === "AboutMe" && <AboutMe />}
          {selectedComponent === "Education" && <Education />}
          {selectedComponent === "Experiences" && <Experiences />}
          {selectedComponent === "Skills" && <Skills />}
          {selectedComponent === "Portfolio" && <Portfolio />}
          {selectedComponent === "Extra" && <Extra />}
          <Chat />
        </Frame>
      </div>

    </div>
  );
};

export default Resume;
