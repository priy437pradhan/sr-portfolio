import './App.css'

import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import HireMe from './components/HireMe';
import Education from './components/Education';
import Skills from './components/skills';


function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <HireMe />
        <Education />
      </div>
    </div>
  );
}

export default App;
