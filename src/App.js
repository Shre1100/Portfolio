import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import './output.css';
import HomePage from "./components/HomePage/Home";
import About from "./components/About";
import Skills from './components/Skills/Skills';
import Connect from './components/Connect/Connect';
import Project from './components/Projects/Project';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ResumePage from "./components/Resume";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/connect" element={<Connect/>}/>
        <Route path="/resume" element={<ResumePage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
