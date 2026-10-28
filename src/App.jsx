import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollCue from './components/ScrollCue';
import WhatIDo from './components/WhatIDo';
import HowIWork from './components/HowIWork';
import Work from './components/Work';
import ExperienceSkills from './components/ExperienceSkills';
import AboutMe from './components/AboutMe';
import PhilosophyQuote from './components/PhilosophyQuote';
import Footer from './components/Footer';
import './styles/index.css';

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ScrollCue />
        <WhatIDo />
        <HowIWork />
        <Work />
        <ExperienceSkills />
        <AboutMe />
        <PhilosophyQuote />
      </main>
      <Footer />
    </>
  );
}
