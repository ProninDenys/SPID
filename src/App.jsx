import React from 'react';
import Benefits from './components/Benefits.jsx';
import StarsBackground from './components/StarsBackground.jsx';
import LayoutWrapper from './components/LayoutWrapper.jsx';
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
    <>
      <StarsBackground />
      <LayoutWrapper>
        {/* Hero Section with Styled Background */}
        <Paper
          shadow="xl"
          radius="md"
          p="xl"
          withBorder
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}
        >
          <Title order={1} fz="40px" c="blue.4">
            🚀 Welcome to SpaceID (SPID)
          </Title>
          <Text size="lg" mt="md" c="gray.3">
            A token inspired by NASA missions. Explore the Universe of data. Invest in the space-powered future.
          </Text>
        </Paper>

        {/* Mission Statement */}
        <Paper shadow="md" p="lg" mt="xl" radius="md" withBorder>
          <Text size="md">
            <strong>SpaceID</strong> is a blockchain project granting access to cosmic data and supporting scientific missions.
            Inspired by <strong>NASA</strong> and global space agencies, we make data from the stars accessible to everyone.
          </Text>
        </Paper>

        {/* Benefits Section */}
        <Divider my="xl" label="✨ Benefits" labelPosition="center" />
        <Benefits />

        {/* Roadmap */}
        <Divider my="xl" label="📺 Roadmap" labelPosition="center" />
        <List size="sm" spacing="xs" withPadding>
          <List.Item>Q2 2025 — Launch of website & community</List.Item>
          <List.Item>Q3 2025 — Token release and first partner integrations</List.Item>
          <List.Item>Q4 2025 — Data platform alpha and open-source dashboards</List.Item>
          <List.Item>2026+ — Cross-agency partnerships and full AI-based indexing</List.Item>
        </List>

        {/* Community Proof */}
        <Divider my="xl" label="🌌 Community Voices" labelPosition="center" />
        <Paper shadow="sm" p="md" radius="md" withBorder>
          <Text size="sm" color="dimmed">
            “If SPID had existed back then, we might've tracked Webb’s signals before they made headlines.
            This project brings the stars closer to us.”
          </Text>
          <Text size="xs" mt="xs" align="right" fw={500}>
            — Reddit user from r/NASA
          </Text>
        </Paper>

        {/* Final CTA */}
        <Paper shadow="md" radius="xl" p="xl" mt="xl" withBorder>
          <Container size="sm" ta="center">
            <Title order={2}>The Future Is Already Orbiting</Title>
            <Text size="md" mt="sm" color="dimmed">
              Join the SpaceID mission and fuel the next generation of exploration.
              Your token is more than investment — it’s your personal satellite into tomorrow’s discoveries.
            </Text>
            <Group justify="center" mt="lg">
              <Button size="md" variant="filled" color="blue">
                🚀 Buy SPID Token
              </Button>
              <Button size="md" variant="outline">
                📡 Join Telegram
              </Button>
            </Group>
          </Container>
        </Paper>
      </LayoutWrapper>

      {/* Animated Mission Section */}
      <MissionSection />

      {/* Footer */}
      <Footer />
    </>
  );
}