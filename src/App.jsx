import { useEffect } from "react";
import Main from "./components/Main/Main";
import "aos/dist/aos.css"; //
import Aos from "aos";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import './globals.css'
import NavBar from "./components/Nav/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Main />
      <AboutMe />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;

