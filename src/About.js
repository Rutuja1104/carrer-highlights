import React, { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {
  const [showMail, setShowMail] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("rutujasahare2018@gmail.com"); // Copies email to clipboard
    setCopied(true); // Show 'Copied' message
    setTimeout(() => setCopied(false), 2000); // Hide 'Copied' message after 2 seconds
  };
  return (
    <div className="text-white m-4">
      <div className="containerinfo mb-5">
        <div className="aboutContainer mt-5">
          <h1 className="mb-4">
            Hello 👋, This is{" "}
            <span style={{ color: "rgb(236 72 153)" }}>RUTUJA SAHARE,</span>
          </h1>
          <h1 className="mt-2">
            I'm a{" "}
            <span style={{ color: "rgb(72 236 169)" }}>Frontend Developer</span>
          </h1>
          <div
            className="d-flex justify-content-between mt-5 p-0 mb-6"
            style={{ fontSize: "30px" }}
          >
            <a
              className="social-media text-white"
              href="https://www.linkedin.com/in/rutujasahare/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="social-media text-white"
              href="https://github.com/Rutuja1104"
            >
              <FaGithub />
            </a>
            {copied && (
              <span
                className="badge text-bg-success"
                style={{ marginTop: "50px" }}
              >
                Copied!
              </span>
      )}

            <a
              className="social-media text-white"
              href="mailto:rutujasahare2018@gmail.com"
              onClick={handleCopy}

            >
              <SiGmail />
            </a>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="btn btn-outline-info mt-5"
              style={{ width: "100%" }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/rutujasahare/",
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              <strong>Hire Me</strong>
            </button>
          </div>
        </div>
        <div className="ImgContainer">
          <img
            className="ImgCoder"
            align="right"
            alt="Coder"
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzM4ZG1xc3o3bXc5MGJ4bGpkejRqeGhvNDl5OXJldHYxZGkwM2R0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
