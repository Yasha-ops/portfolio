import React from "react";
/* Components */
import NavBar from "~/components/NavBar";
import Hero from "~/components/Hero";
import Skills from "~/components/Skills";
import AboutMe from "~/components/AboutMe";
import Projects from "~/components/Projects";
import Hackathons from "../components/Hackathons";

/* Styles */
import "~/styles/App.css";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills/>
      <Projects/>
      <Hackathons/>
    </div>
  );
}

export default App
