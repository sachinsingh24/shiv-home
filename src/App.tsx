/** @format */

import React, { useCallback } from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import './App.css';
import particlesOptions from './particles.json';
import { ISourceOptions } from 'tsparticles-engine';
import Navbar from './components/Navbar/nav_tab';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact_Us/Contact';
import ProjectCom from './components/Projects/Completed/Completed';
import ProjectOnGoing from './components/Projects/Ongoing/Ongoing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Particles
          options={particlesOptions as ISourceOptions}
          init={particlesInit}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Contact_Us' element={<Contact />} />
          <Route path='Project_completed' element={<ProjectCom />} />
          <Route path='Project_OnGoing' element={<ProjectOnGoing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
