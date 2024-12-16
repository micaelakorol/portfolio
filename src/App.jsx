import React, { useEffect } from "react";
import NavBar from "./components/Main/NavBar";
import Presentation from "./components/Main/Presentation";
import AboutMe from "./components/About-Skills/AboutMe";
import "aos/dist/aos.css"; //
import Aos from "aos";
import Footer from "./components/Footer/Footer";
import MyProjects from "./components/Project/MyProjects";
import './globals.css'

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 300,
    });
  }, []);
  return (
    <div>
      <NavBar />
      <Presentation />
      <AboutMe />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default App;
