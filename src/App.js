import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="testimonials">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
