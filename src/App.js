import React, { useEffect } from "react";
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from "./Contact";
import ExperienceCard from "./Experience";
import Achievements from "./Achievements";
import { initMixpanel, track } from "./initMixpanel";
import useSectionTracker from "./useSectionTracker";

function App() {

    function getAllowedUserInfo() {
  return {
    userAgent: navigator.userAgent,
    browserPlatform: navigator.userAgentData?.platform,
    isMobile: navigator.userAgentData?.mobile,
    language: navigator.language,
    screen: {
      width: window.screen.width,
      height: window.screen.height
    },
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    referrer: document.referrer,
    url: window.location.href,
    cookiesEnabled: navigator.cookieEnabled,
  };
}

  useEffect(() => {
    initMixpanel();
    track("Page Loaded");
    console.log("getAllowedUserInfo",getAllowedUserInfo())
    track("User Info", getAllowedUserInfo());
  }, []);


  useSectionTracker([
    "about",
    "skills",
    "projects",
    "experience",
    "achievements",
    "contact"
  ]);

  return (
    <div>
      <Navbar />
      <section id="about" onClick={() => {
        track('Click On about section', { section: 'about' });
      }}>
        <About />
      </section>
      <section id="skills" onClick={() => {
        track('Click On skills section', { section: 'skills' });
      }}>
        <Skills />
      </section>
      <section id="projects" onClick={() => {
        track('Click On projects section', { section: 'projects' });
      }}>
        <Project />
      </section>
      <section id="experience" onClick={() => {
        track('Click On Experience section', { section: 'Experience' });
      }}>
        <ExperienceCard />
      </section>
      <section id="achievements" onClick={() => {
        track('Click On Achievements section', { section: 'Achievements' });
      }}>
        <Achievements />
      </section>
      <section id="contact" onClick={() => {
        track('Click On Contact section', { section: 'contact' });
      }}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
