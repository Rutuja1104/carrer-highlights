import React from "react";
import Heading from "./Heading";
import img1 from "./Images/cakes.avif";
import img2 from "./Images/car.jpg";
import img3 from "./Images/Travel.jpg";
const Project = () => {
  return (
    <div className="text-white m-4 mb-5">
      <Heading tittle={"Projects"} />
      {/* <div className=''>
          <img src={img1}class="card-img-top" alt="..."/>
        </div> */}
      <div className="ProjectContainer mt-5 mb-5">
        <div class="projectCard card" >
          <img src={img1} class="card-img-top" alt="Cakes" />
          <div class="card-body">
            <h3 class="card-title text-dark">🍰 CAKE CRAVERS APPLICATIONS</h3>
            {/* <h4 class="card-text text-dark" >🍰 Cake Cravers Application</h4> */}
            <a
              href="https://rutuja1104.github.io/OnlineCakeShop/"
              class="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Cake Application
            </a>
          </div>
        </div>
        <div class="projectCard card" >
          <img src={img2} class="card-img-top" alt="Cakes" />
          <div class="card-body">
            <h3 class="card-title text-dark">🌍 EV INSIGHT HUB</h3>
            {/* <h4 class="card-text text-dark" >🍰 Cake Cravers Application</h4> */}
            <a
              href="https://github.com/Rutuja1104/EV-INSIGHT-HUB"
              class="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore EV Application
            </a>
          </div>
        </div>
        <div class="projectCard card" >
          <img src={img3} class="card-img-top" alt="Cakes" style={{height:"100%"}} />
          <div class="card-body">
            <h3 class="card-title text-dark">🌍 Travel To Heaven </h3>
            {/* <h4 class="card-text text-dark" >🍰 Cake Cravers Application</h4> */}
            <a
              href="https://rutuja1104.github.io/Travel-To-Heaven/"
              class="btn btn-primary"
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
