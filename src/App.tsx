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

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className='App'>
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
      />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
