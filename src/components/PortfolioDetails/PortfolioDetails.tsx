import React from "react";
import "../Portfolio/portfolio.scss";
import { PortfolioCardProps } from "../Portfolio/Portfolio";

interface PortfolioDetailsProps {
  card: PortfolioCardProps;
  handleCloseButton: () => void;
}

const PortfolioDetails: React.FC<PortfolioDetailsProps> = ({ card, handleCloseButton }) => {
    
return (
    <div className="portfolioCard-details">
      <button onClick={handleCloseButton}>X</button>
      <h3>{card.title}</h3>
      <h4>{card.subtitle}</h4>
      <img src={card.imageUrl} alt="pic" />
      <p>{card.description}</p>
      {card.deployUrl && (
        <React.Fragment>
          <p>
            Git Hub: <a href={card.linkUrl}>{card.linkUrl}</a>
          </p>
          <p>
            To the page: <a href={card.deployUrl}>{card.deployUrl}</a>
          </p>
        </React.Fragment>
      )}
    </div>
  );
};

export default PortfolioDetails;
