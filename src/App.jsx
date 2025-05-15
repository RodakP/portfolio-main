import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./sections/Home";
import AnimationWaves from "./components/AnimationWaves";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ScrollReveal from "./components/ScrollReveal";
import Footer from "./sections/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isLoading && <LoadingScreen onComplete={() => {
        setIsLoading(true)
      }}/>}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
      <AnimationWaves />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
