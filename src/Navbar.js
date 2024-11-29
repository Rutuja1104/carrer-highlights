import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent text-light">
        <a className="navbar-brand" href="#">
          <span style={{ fontSize: "40px", color: "rgb(72 236 169)" }}>
            Rutuja Sahare
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse ml-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-light" href="#about">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#skills">
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#projects">
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#Contact">
                CONTACTS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
