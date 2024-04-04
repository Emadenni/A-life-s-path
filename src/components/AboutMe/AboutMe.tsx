import "./aboutMe.scss";
import profilePic from "../../assets/images/profilePic.jpg";



const AboutMe = () => {
  return (
   
  
      <div className="aboutMe-container">
        <div className="aboutMe-container__text" >
         <img src={profilePic} alt="profile" />
        <p>
       
          My name is Emanuele De Negri, I am 37 years old, and I have recently embarked on my journey in the world of
          web development and programming. <br /> <br /> My goal is to dedicate as much time as possible to this great
          passion and turn it into a full-fledged career. The means I am using to achieve my goal include
          <span className="lightRed"> skill development</span>,<span className="lightRed"> perseverance</span>,
          <span className="lightRed"> humility</span> and a <span className="lightRed">thirst for knowledge</span>.
        </p>
        </div>
        <ul>
          <div className="listPart1">
            <li>
              Name: <br />
              <span> Emanuele De Negri</span>
            </li>
            <li>
              Date of birth: <br />
              <span> 28/12/1986</span>
            </li>
            <li>
              Place of birth: <br />
              <span> Cava dei Tirreni SA (Italy)</span>
            </li>
          </div>
          <div className="listPart2">
            <li>
              Address: <br /> <span> Björkliden 122, 58665 Linköping</span>
            </li>
            <li>
              E-mail: <br />
              <span>
                {" "}
                <a href="mailto:emanuele.dng86@gmail.com">emanuele.dng86@gmail.com</a>
              </span>
            </li>
            <li>
              Tel.: <br />
              <span>
                <a href="tel:+46722116422">+46722116422</a>
              </span>
            </li>
          </div>
        </ul>
      </div>
    
  );
};

export default AboutMe;
