import React from 'react';
import StarsBackground from './components/StarsBackground.jsx';
import LayoutWrapper from './components/LayoutWrapper.jsx';
import Benefits from './components/Benefits.jsx';
import MissionSection from './components/MissionSection.jsx';
import TokenomicsSection from './components/TokenomicsSection.jsx';
import PartnersSection from './components/PartnersSection.jsx';
import FaqSection from './components/faqSection.jsx';
import CallToActionSection from './components/CallToActionSection.jsx';
import Footer from './components/Footer.jsx';
import TechnologySection from './components/TechnologySection.jsx';

export default function App() {
  return (
    <LayoutWrapper>
      <StarsBackground />
      <MissionSection />
      <Benefits />
      <TokenomicsSection />
      <TechnologySection />
      <PartnersSection />
      <FaqSection />
      <CallToActionSection />
      <Footer />
    </LayoutWrapper>
  );
}