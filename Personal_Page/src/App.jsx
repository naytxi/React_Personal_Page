import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Reserve from "./components/Reserve";
import About from "./components/About";
import "./App.css";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/contact">Contact</Link> 
        <Link to="/reserve">Reserve</Link> 
        <Link to="/about">About</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/about" element={<About />} />
        {}
        {}
      </Routes>
    </Router>
  );
};


export default App;