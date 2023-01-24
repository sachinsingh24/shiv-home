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
import { Routes, Route } from 'react-router-dom';

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Particles
                options={particlesOptions as ISourceOptions}
                init={particlesInit}
              />{' '}
              <Home />
            </>
          }
        />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Constructed' element={<ProjectCom />} />
        <Route
          path='OnGoing'
          element={
            <>
              <Particles
                options={particlesOptions as ISourceOptions}
                init={particlesInit}
              />{' '}
              <ProjectOnGoing />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
