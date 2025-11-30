import React from "react";
import Heading from "./Heading";
import img1 from "./Images/cakes.avif";
import img2 from "./Images/car.jpg";
import img3 from "./Images/Travel.jpg";
import AtsImg from "./Images/ats.png";

const Project = () => {
  return (
    <div className="text-white m-4 mb-5">
      <Heading tittle={"Projects"} />
      {/* <div className=''>
          <img src={img1}className="card-img-top" alt="..."/>
        </div> */}
      <div className="ProjectContainer mt-5 mb-5">
        <div className="projectCard card" >
          <img src={AtsImg} className="card-img-top" alt="Ats Smart Resume Tracker" />
          <div className="card-body">
            <h3 className="card-title text-dark"> AI Smart Resume Tracker</h3>
            {/* <h4 className="card-text text-dark" >🍰 Cake Cravers Application</h4> */}
            <a
              href="https://rutuja1104.github.io/Resume.Trackr.ai/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Ats Smart Resume Tracker
            </a>
          </div>
        </div>
        <div className="projectCard card" >
          <img src={img1} className="card-img-top" alt="Cakes" />
          <div className="card-body">
            <h3 className="card-title text-dark">🍰 CAKE CRAVERS APPLICATIONS</h3>
            {/* <h4 className="card-text text-dark" >🍰 Cake Cravers Application</h4> */}
            <a
              href="https://rutuja1104.github.io/OnlineCakeShop/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Cake Application
            </a>
          </div>
        </div>
        <div className="projectCard card" >
          <img src={img2} className="card-img-top" alt="Cakes" />
          <div className="card-body">
            <h3 className="card-title text-dark">🌍 EV INSIGHT HUB</h3>
            {/* <h4 className="card-text text-dark" >🍰 Cake Cravers Application</h4> */}
            <a
              href="https://github.com/Rutuja1104/EV-INSIGHT-HUB"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore EV Application
            </a>
          </div>
        </div>
        <div className="projectCard card" >
          <img src={img3} className="card-img-top" alt="Cakes" style={{ height: "100%" }} />
          <div className="card-body">
            <h3 className="card-title text-dark">🌍 Travel To Heaven </h3>
            {/* <h4 className="card-text text-dark" >🍰 Cake Cravers Application</h4> */}
            <a
              href="https://rutuja1104.github.io/Travel-To-Heaven/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Travel To Heaven Application
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
