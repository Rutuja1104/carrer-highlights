import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Accordion } from "react-bootstrap";
import Heading from "./Heading";
import img from "./Images/311144920_1480995738980015_2241055878350119737_n.jpg";
import img1 from "./Images/softtechengineersltd_logo.jpg";

const ExperienceCard = () => {
  const [modalData, setModalData] = useState({
    show: false,
    title: "",
    companyImg: "",
    skills: []
  });

  const openModal = (title, companyImg, skills) => {
    setModalData({
      show: true,
      title,
      companyImg,
      skills
    });
  };

  const closeModal = () => {
    setModalData({ ...modalData, show: false });
  };

  // -----------------------------
  // SKILL ARRAYS
  // -----------------------------
  const SoftTechSkills = [
    { title: "nx monorepo", description: "Worked with nx monorepo for scalable multi-project architecture." },
    { title: "React.js", description: "Developed responsive interfaces with React.js." },
    { title: "Internet Information Services (IIS)", description: "Maintained and deployed apps using IIS." },
    { title: "Cypress", description: "Automated UI testing using Cypress." },
  ];

  const E1skills = [
    { title: "JavaScript", description: "Developed dynamic and interactive web applications using JavaScript." },
    { title: "WebSocket in React", description: "Implemented real-time communication using WebSocket." },
    { title: "SASS", description: "Styled modular and maintainable pages using SASS." },
    { title: "Webpack", description: "Configured Webpack for optimized bundling." },
    { title: "Sentry", description: "Integrated Sentry for real-time error monitoring." },
    { title: "Chrome Extensions", description: "Developed custom Chrome browser extensions." },
    { title: "Electron.js", description: "Built cross-platform desktop apps with Electron." },
    { title: "React.js", description: "Built responsive interfaces using React.js." },
    { title: "Git", description: "Collaborated using Git version control." }
  ];

  const E2skills = [
    { title: "Sentry", description: "Integrated Sentry for real-time error monitoring." },
    { title: "TypeScript", description: "Built scalable apps using TypeScript." },
    { title: "Redux", description: "Managed global state with Redux." },
    { title: "Redux-Saga", description: "Handled async logic using Redux-Saga." },
    { title: "Material UI", description: "Built intuitive UI with Material UI." },
    { title: "Tailwind CSS", description: "Designed responsive layouts using Tailwind CSS." },
  ];

  const Eskills = [
    { title: "JavaScript", description: "Developed dynamic pages using JavaScript." },
    { title: "HTML", description: "Structured web pages using HTML." },
    { title: "CSS", description: "Styled modern layouts using CSS." },
    { title: "jQuery", description: "Simplified DOM manipulation using jQuery." },
    { title: "NiFi", description: "Automated workflows using Apache NiFi." },
    { title: "Mirth", description: "Handled HL7 and healthcare integration using Mirth Connect." },
    { title: "PostgreSQL", description: "Managed databases using PostgreSQL." }
  ];

  return (
    <div className="text-white m-4 mb-5">
      <Heading tittle={"Experience"} />

      <div className="container my-4 text-white bg-transparent" style={{ width: "50%" }}>
        
        {/* ------------------------------------ */}
        {/*    SOFTTECH ENGINEERS                */}
        {/* ------------------------------------ */}
        <div className="card p-3 text-white bg-transparent">
          <div className="d-flex flex-row">
            <img className="companyImg mr-3" align="right" src={img1} />
            <h4>SoftTech Engineers Ltd</h4>
          </div>

          <p className="text-secondary">Full-time · 1 yr 2 mos | On-site</p>
          <div className="border-start ps-3">
            <div className="mb-4">
              <h5>Associate</h5>
              <p className="text-secondary">Dec 2024 - Present | Pune, Maharashtra, India</p>

              <p
                className="skillCompany"
                onClick={() =>
                  openModal(
                    "Skills for Associate at SoftTech Engineers Ltd",
                    img1,
                    SoftTechSkills
                  )
                }
              >
                <strong>Skills:</strong> nx monorepo, React.js and +2 more
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------ */}
        {/*    THINKITIVE TECHNOLOGIES           */}
        {/* ------------------------------------ */}
        <div className="card p-3 text-white bg-transparent mt-4">
          <div className="d-flex flex-row">
            <img className="companyImg mr-3" align="right" src={img} />
            <h4>Thinkitive Technologies</h4>
          </div>

          <p className="text-secondary">Full-time · 2 yrs 2 mos | On-site</p>

          <div className="border-start ps-3">

            {/* E2 */}
            <div className="mb-4">
              <h5>Software Engineer E2</h5>
              <p className="text-secondary">Oct 2023 - Nov 2024 · 1 yr 2 mos | Pune</p>

              <p
                className="skillCompany"
                onClick={() =>
                  openModal(
                    "Skills for Software Engineer E2 at Thinkitive",
                    img,
                    E2skills
                  )
                }
              >
                <strong>Skills:</strong> Sentry, TypeScript and +4 more
              </p>
            </div>

            {/* E1 */}
            <div className="mb-4">
              <h5>Software Engineer E1</h5>
              <p className="text-secondary">Apr 2023 - Oct 2023 · 7 mos | Pune</p>

              <ul>
                <li>Built responsive web apps using React.js.</li>
                <li>Implemented WebSocket for real-time updates.</li>
                <li>Configured webpack for optimized bundles.</li>
                <li>Used Sentry for proactive debugging.</li>
                <li>Created Chrome extensions.</li>
                <li>Developed Electron.js apps.</li>
              </ul>

              <p
                className="skillCompany"
                onClick={() =>
                  openModal(
                    "Skills for Software Engineer E1 at Thinkitive",
                    img,
                    E1skills
                  )
                }
              >
                <strong>Skills:</strong> JavaScript, WebSocket and +7 more
              </p>
            </div>

            {/* Trainee */}
            <div>
              <h5>Trainee Software Engineer</h5>
              <p className="text-secondary">Oct 2022 - Apr 2023 · 7 mos | Pune</p>

              <ul>
                <li>Developed frontend using React.js.</li>
                <li>Worked with NiFi and Mirth.</li>
                <li>Managed PostgreSQL databases.</li>
                <li>Built pages using HTML & CSS.</li>
              </ul>

              <p
                className="skillCompany"
                onClick={() =>
                  openModal(
                    "Skills for Trainee Software Engineer at Thinkitive",
                    img,
                    Eskills
                  )
                }
              >
                <strong>Skills:</strong> HTML, CSS and +6 more
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------- */}
      {/*        REUSABLE MODAL         */}
      {/* ----------------------------- */}
      <Modal show={modalData.show} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion>
            {modalData.skills.map((skill, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{skill.title}</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-row">
                    <img className="companyImg mr-3" src={modalData.companyImg} />
                    {skill.description}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ExperienceCard;
