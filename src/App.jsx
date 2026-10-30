import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollCue from './components/ScrollCue';
import Work from './components/Work';
import WhatIDo from './components/WhatIDo';
import ExperienceSkills from './components/ExperienceSkills';
import AboutMe from './components/AboutMe';
import PhilosophyQuote from './components/PhilosophyQuote';
import HowIWork from './components/HowIWork';
import Footer from './components/Footer';
import './styles/index.css';

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ScrollCue />
        <Work />
        <WhatIDo />
        <ExperienceSkills />
        <AboutMe />
        <PhilosophyQuote />
        <HowIWork />
      </main>
      <Footer />
    </>
  );
}
