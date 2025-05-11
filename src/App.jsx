// src/App.jsx
import React from 'react';
import StarsBackground from './components/StarsBackground.jsx';
import LayoutWrapper from './components/LayoutWrapper.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Benefits from './components/Benefits.jsx';
import MissionSection from './components/MissionSection.jsx';
import TokenomicsSection from './components/TokenomicsSection.jsx';
import TechnologySection from './components/TechnologySection.jsx';
import PartnersSection from './components/PartnersSection.jsx';
import FaqSection from './components/FaqSection.jsx';
import CallToActionSection from './components/CallToActionSection.jsx';

export default function App() {
  return (
    <>
      <Header />
      <StarsBackground />
      <LayoutWrapper>
        <section id="top"></section>
        <section id="mission">
          <MissionSection />
        </section>
        <section id="benefits">
          <Benefits />
        </section>
        <section id="tokenomics">
          <TokenomicsSection />
        </section>
        <section id="technology">
          <TechnologySection />
        </section>
        <section id="partners">
          <PartnersSection />
        </section>
        <section id="faq">
          <FaqSection />
        </section>
        <section id="cta">
          <CallToActionSection />
        </section>
        <Footer />
      </LayoutWrapper>
    </>
  );
}