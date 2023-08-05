import React from "react";

import "./App.css";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tech from "./pages/Tech";

function App() {
  return (
    <div className="app">
      <div className="black-effect">
        <div id="home"></div>
        <Header />
        <Home />
        <div className="space" id="projects"></div>
        <Projects />
        <div className="space" id="tech"></div>
        <Tech />
        <div className="space" id="contact"></div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
