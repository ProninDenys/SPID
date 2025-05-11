// App.jsx
import React from 'react';
import Benefits from './components/Benefits.jsx';
import StarsBackground from './components/StarsBackground.jsx';
import LayoutWrapper from './components/LayoutWrapper.jsx';
import TokenomicsSection from './components/TokenomicsSection.jsx';
import TechnologySection from './components/TechnologySection.jsx';
import PartnersSection from './components/PartnersSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import CTASection from './components/CTASection.jsx';
import {
  Title,
  Text,
  Button,
  Group,
  Paper,
  Divider,
  List,
  Container,
} from '@mantine/core';
import MissionSection from './components/MissionSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <LayoutWrapper>
      <StarsBackground />

      {/* Hero Section */}
      <Paper
        shadow="xl"
        radius="md"
        p="xl"
        withBorder
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
        }}
      >
        <Title order={1} fz="40px" c="blue.4">
          🚀 Welcome to SpaceID (SPID)
        </Title>
        <Text size="lg" mt="md" c="gray.3">
          A token inspired by NASA missions. Explore the Universe of data.
        </Text>
      </Paper>

      {/* Core Sections */}
      <MissionSection />
      <Benefits />
      <TokenomicsSection />
      <TechnologySection />
      <PartnersSection />
      <FAQSection />
      <CTASection />

      {/* Final Section */}
      <Footer />
    </LayoutWrapper>
  );
}
