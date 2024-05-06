import { useState } from "react";
import "./portfolio.scss";
import PortfolioDetails from "../PortfolioDetails/PortfolioDetails";
import BonzAi from "../../../src/assets/portfolio-cards/BonzAi4.png";
import Solaris from "../../../src/assets/portfolio-cards/solaris2.png";
import MiniLibrary from "../../../src/assets/portfolio-cards/mini-library2.png";
import AirBean from "../../../src/assets/portfolio-cards/air-bean.png";
import KFF from "../../../src/assets/portfolio-cards/kff1.png";
import ALP from "../../../src/assets/portfolio-cards/Alp.png";
import StarWars from "../../../src/assets/portfolio-cards/starWars1.png";
import PunkAPI from "../../../src/assets/portfolio-cards/apiBeer.png";

export interface PortfolioCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  kind: string;
  description?: string;
  linkUrl?: string;
  deployUrl?: string;
}
const Portfolio: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<PortfolioCardProps | null>(null);

  const portfolioCards: PortfolioCardProps[] = [
    {
      imageUrl: BonzAi,
      title: "BonzAi",
      subtitle: "HTML/CSS",
      kind: "Education Project",
      description:
        "This is the final project of the mini course in HTML/CSS from my JS developer education. The focus of the project was mainly on the use of responsive layouts such as flexbox and grid and the navigation among pages. Final grade: Väl Gödkänt.",
      linkUrl: "https://github.com/Emadenni/BonzAi.git",
      deployUrl: "https://emadenni.github.io/BonzAi/",
    },
    {
      imageUrl: Solaris,
      title: "Solaris",
      subtitle: "TypeScript/API",
      kind: "Education Project",
      description:
        "The goal of Solaris was primarily to practice with the API and populate content with information obtained from it. Initially, the project was written in JavaScript and later refactored into TypeScript. Final grade: Väl Gödkänt.",
      linkUrl: "https://github.com/Emadenni/solaris-ts-version.git",
      deployUrl: " https://emadenni.github.io/solaris/",
    },
    {
      imageUrl: MiniLibrary,
      title: "Mini Library ",
      subtitle: "TypeScript/API",
      kind: "Education Project",
      description:
        "Again, the focus was on utilizing APIs to dynamically generate cards. Additionally, I was asked to implement a simple search bar. Final grade: Väl Gödkänt.",
      linkUrl: "https://github.com/Emadenni/mini-library.git",
      deployUrl: "https://emadenni.github.io/mini-library/",
    },
    {
      imageUrl: AirBean,
      title: "Air Bean",
      subtitle: "React/TypeScript",
      kind: "Education Project",
      description:
        "Air Bean was my first individual experience with React. Among the various challenges of this project, using an API to create an account and implementing a login logic through JWT authentication method stood out. Among the project's requirements was also the utilization of Zustand to implement global states. Final grade: Väl Gödkänt.",
      linkUrl: "https://github.com/Emadenni/Air-bean-app.git",
      deployUrl: "https://emadenni.github.io/Air-bean-app/",
    },
    {
      imageUrl: KFF,
      title: "Kevin Fast Feast",
      subtitle: "Vanilla JavaScript",
      kind: "Private Project",
      description:
        "Kevin Fast Feast is a long-term private project. It involves creating a reel slot machine and implementing animations, also with the use of AI. The project was started in vanilla JavaScript, but my goal is to refactor it into React. Currently, it is still a work in progress.",
      linkUrl: "https://github.com/Emadenni/KFF.git",
      deployUrl: "https://emadenni.github.io/KFF/",
    },
    {
      imageUrl: ALP,
      title: "A life's path",
      subtitle: " React/Typescript",
      kind: "Private Project",
      description:
        "A Life's Path is the project you're currently navigating. The goal is to share a bit about myself while also putting into practice the knowledge I acquire along the way. I plan to keep the page constantly updated.",
      linkUrl: "https://github.com/Emadenni/A-life-s-path.git",
      deployUrl: "https://emadenni.github.io/A-life-s-path/",
    },
    {
      imageUrl: StarWars,
      title: "Star Wars",
      subtitle: "Vanilla Javascript/API",
      kind: "Education Project",
      description:
        "A small JavaScript exercise that I value greatly because it introduced me to APIs and the concepts of promises and fetch.",
      linkUrl: "https://github.com/Emadenni/Star-Wars-catalog.git",
      deployUrl: "https://emadenni.github.io/Star-Wars-catalog/",
    },
    {
      imageUrl: PunkAPI,
      title: "Punk api beers",
      subtitle: "Vanilla Javascript/API",
      kind: "Education Project",
      description:
        "Similar to Star Wars, Punk API beers inspired me in creating dynamically generated elements combined with the implementation of a search logic with various parameters. At the moment, the project is on standby due to other priorities, but I intend to complete it one day.",
    },
  ];

  const handleCardClick = (card: PortfolioCardProps) => {
    setSelectedCard(card);
  };

  const handleCloseButton = () => {
    setSelectedCard(null);
  };

  return (
    <div className="portfolio-container">
      {selectedCard ? (
        <PortfolioDetails card={selectedCard} handleCloseButton={handleCloseButton} />
      ) : (
        <ul>
          {portfolioCards.map((portfolioCard, index) => (
            <li key={index} className="portfolioCard" onClick={() => handleCardClick(portfolioCard)}>
              <h3>{portfolioCard.title}</h3>
              <h4>{portfolioCard.subtitle}</h4>
              <img src={portfolioCard.imageUrl} alt="pic" />
              <p>{portfolioCard.kind}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Portfolio;
