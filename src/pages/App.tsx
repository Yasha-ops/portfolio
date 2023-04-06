import React from "react";

/* Components */
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Hackathons from "../components/Hackathons";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

/* Styles */
import "~/styles/App.css";
import Technologies from "../components/Technologies";

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills/>
      <Technologies/>
      <Projects/>
      <Hackathons/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App
