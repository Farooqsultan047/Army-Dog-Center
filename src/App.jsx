import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Service from "./Pages/Services";
import Services from "./Pages/Services";

function App() {
  return (
    <div>
    
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/service/:province/:district?" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;