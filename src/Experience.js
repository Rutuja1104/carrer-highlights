import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGlobe, FaCircle } from "react-icons/fa";
import Heading from "./Heading";
import { Modal, Button, Accordion } from "react-bootstrap";
import img from "./Images/311144920_1480995738980015_2241055878350119737_n.jpg";

const ExperienceCard = () => {
  const [showE, setShowE] = useState(false);
  const handleCloseE = () => setShowE(false);
  const handleShowE = () => setShowE(true);
  const [showE1, setShowE1] = useState(false);
  const handleCloseE1 = () => setShowE1(false);
  const handleShowE1 = () => setShowE1(true);
  const [showE2, setShowE2] = useState(false);
  const handleCloseE2 = () => setShowE2(false);
  const handleShowE2 = () => setShowE2(true);

  const E1skills = [
    {
      title: "JavaScript",
      description:
        "Developed dynamic and interactive web applications using JavaScript.",
    },
    {
      title: "WebSocket connection in React",
      description:
        "Implemented real-time data communication in React apps using WebSocket.",
    },
    {
      title: "SASS",
      description:
        "Styled web applications with modular and maintainable SASS.",
    },
    {
      title: "Webpack",
      description:
        "Configured Webpack for optimized bundling and performance enhancement.",
    },
    {
      title: "Sentry",
      description:
        "Integrated Sentry for real-time error monitoring and debugging.",
    },
    {
      title: "Chrome Extensions",
      description:
        "Built and deployed browser extensions to enhance EHR workflows.",
    },
    {
      title: "Electron.js",
      description: "Developed cross-platform desktop apps with Electron.js.",
    },
    {
      title: "React.js",
      description:
        "Built responsive and high-performance user interfaces with React.js.",
    },
    {
      title: "Git",
      description: "Version control and collaboration using Git.",
    },
  ];

  const E2skills = [
    { title: "Sentry", description: "Integrated Sentry for real-time error monitoring and debugging." },
  { title: "TypeScript", description: "Developed scalable and type-safe applications using TypeScript." },
  { title: "Redux", description: "Managed complex application state with Redux for predictable state management." },
  { title: "Redux-Saga", description: "Handled side effects and asynchronous actions in Redux using Redux-Saga." },
  { title: "Material-UI", description: "Designed modern and responsive UIs with Material-UI components." },
  { title: "Tailwind CSS", description: "Created highly responsive and customizable designs using Tailwind CSS." }
  ];

  const Eskills = [
    {
      title: "JavaScript",
      description:
        "Developed dynamic and interactive web applications using JavaScript.",
    },
    {
      title: "HTML",
      description:
        "Implemented real-time data communication in React apps using WebSocket.",
    },
    {
      title: "CSS",
      description:
        "Styled web applications with modular and maintainable SASS.",
    },
    {
      title: "jQuery",
      description:
        "Enhanced web pages with dynamic features and simplified DOM manipulation using jQuery.",
    },
    {
      title: "NiFi",
      description:
        "Automated data flow pipelines and integrated systems using Apache NiFi.",
    },
    {
      title: "Mirth",
      description:
        "Managed healthcare data exchange with Mirth Connect integration.",
    },
    {
      title: "PostgreSQL",
      description:
        "Designed and optimized relational databases using PostgreSQL.",
    },
  ];

  return (
    <div className="text-white m-4 mb-5">
      <Heading tittle={"Experience"} />
      <div
        className="container my-4 text-white bg-transparent"
        style={{ width: "50%" }}
      >
        <div className="card p-3 text-white bg-transparent">
          <div className="d-flex flex-row">
            <img className="companyImg mr-3" align="right" src={img} />
            <h4>Thinkitive Technologies</h4>
          </div>

          <p className="text-secondary">Full-time · 2 yrs 2 mos | On-site</p>
          <div className="border-start ps-3">
            {/* Software Engineer E2 */}
            <div className="mb-4">
              <h5>Software Engineer E2</h5>
              <p className="text-secondary">
                Oct 2023 - Nov 2024 · 1 yr 2 mos | Pune, Maharashtra, India
              </p>
              <p className="skillCompany" onClick={handleShowE2} >
                <strong>Skills:</strong> Sentry, TypeScript and +4 skills
              </p>
            </div>
            {/* Software Engineer E1 */}
            <div className="mb-4">
              <h5>Software Engineer E1</h5>
              <p className="text-secondary">
                Apr 2023 - Oct 2023 · 7 mos | Pune, Maharashtra, India
              </p>
              <ul>
                <li>
                  Proficient in building dynamic and responsive web applications
                  using React.js.
                </li>
                <li>
                  Experienced in managing WebSocket connections for real-time
                  communication.
                </li>
                <li>
                  Well-versed in Webpack for bundling and asset management.
                </li>
                <li>Utilized Sentry for proactive error tracking.</li>
                <li>
                  Skilled in cross-platform app development using Electron.js.
                </li>
                <li>Expertise in developing Chrome extensions.</li>
              </ul>
              <p onClick={handleShowE1} className="skillCompany">
                <strong>Skills:</strong> JavaScript, WebSocket in React and +7
                skills
              </p>
            </div>
            {/* Trainee Software Engineer */}
            <div>
              <h5>Trainee Software Engineer</h5>
              <p className="text-secondary">
                Oct 2022 - Apr 2023 · 7 mos | Pune, Maharashtra, India
              </p>
              <ul>
                <li>Built modern frontend applications with React.js.</li>
                <li>
                  Proficient in Mirth and Apache NiFi for data flow integration.
                </li>
                <li>Skilled in PostgreSQL database management.</li>
                <li>
                  Solid foundation in HTML and CSS for web structuring and
                  styling.
                </li>
              </ul>
              <p className="skillCompany" onClick={handleShowE}>
                <strong>Skills:</strong> HTML, CSS and +6 skills
              </p>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showE1} onHide={handleCloseE1} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Skills for Software Engineer E1 at Thinkitive Technologies Pvt. Ltd.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion defaultActiveKey="0">
            {E1skills.map((skill, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{skill.title}</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-row">
                    <img className="companyImg mr-3" align="right" src={img} />
                    {skill.description}.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>

      <Modal show={showE2} onHide={handleCloseE2} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Skills for Software Engineer E2 at Thinkitive Technologies Pvt. Ltd.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion defaultActiveKey="0">
            {E2skills.map((skill, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{skill.title}</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-row">
                    <img className="companyImg mr-3" align="right" src={img} />
                    {skill.description}.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>

      <Modal show={showE} onHide={handleCloseE} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Skills for Trainee Software Engineer at Thinkitive Technologies
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion defaultActiveKey="0">
            {Eskills.map((skill, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{skill.title}</Accordion.Header>
                <Accordion.Body>
                  <div className="d-flex flex-row">
                    <img className="companyImg mr-3" align="right" src={img} />
                    {skill.description}.
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ExperienceCard;
