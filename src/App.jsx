import React from 'react';
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Paper,
  Divider,
  List,
  ThemeIcon,
  Grid,
} from '@mantine/core';
import {
  IconRocket,
  IconDatabase,
  IconShieldCheck,
  IconChartBar,
} from '@tabler/icons-react';
import MissionSection from './components/MissionSection.jsx';
import Footer from './components/Footer.jsx';

const benefits = [
  {
    icon: IconRocket,
    title: 'NASA-Driven Vision',
    description: 'Inspired by real space missions and data use cases from NASA.',
  },
  {
    icon: IconDatabase,
    title: 'Decentralized Research',
    description: 'Access and contribute to space exploration data on-chain.',
  },
  {
    icon: IconShieldCheck,
    title: 'Security First',
    description: 'Built with modern cryptographic and Web3 security standards.',
  },
  {
    icon: IconChartBar,
    title: 'Real Utility',
    description: 'Used by space researchers, developers, and explorers.',
  },
];

export default function App() {
  return (
    <>
      <Container size="md" py="xl">
        {/* Step 1: Hero Section */}
        <Title order={1} ta="center" mb="md">
          🚀 Welcome to SpaceID (SPID)
        </Title>

        {/* Step 2: Subheading */}
        <Text ta="center" size="lg" color="dimmed">
          A token inspired by NASA missions. Explore the Universe of data. Invest in the space-powered future.
        </Text>

        {/* Step 3: Mission Statement */}
        <Paper shadow="md" p="lg" mt="xl" radius="md" withBorder>
          <Text size="md">
            <strong>SpaceID</strong> is a blockchain project granting access to cosmic data and supporting scientific missions.
            Inspired by <strong>NASA</strong> and global space agencies, we make data from the stars accessible to everyone.
          </Text>
        </Paper>

        {/* Step 4: Key Benefits */}
        <Divider my="xl" label="✨ Benefits" labelPosition="center" />
        <Grid>
          {benefits.map((benefit, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper shadow="xs" p="md" radius="md" withBorder>
                  <Group>
                    <benefit.icon size={28} />
                    <div>
                      <Text fw={600}>{benefit.title}</Text>
                      <Text size="sm" c="dimmed">
                        {benefit.description}
                      </Text>
                    </div>
                  </Group>
                </Paper>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>

        {/* Step 5: Roadmap */}
        <Divider my="xl" label="📺 Roadmap" labelPosition="center" />
        <List size="sm" spacing="xs" withPadding>
          <List.Item>Q2 2025 — Launch of website & community</List.Item>
          <List.Item>Q3 2025 — Token release and first partner integrations</List.Item>
          <List.Item>Q4 2025 — Data platform alpha and open-source dashboards</List.Item>
          <List.Item>2026+ — Cross-agency partnerships and full AI-based indexing</List.Item>
        </List>

        {/* Step 6: Social Proof */}
        <Divider my="xl" label="🌌 Community Voices" labelPosition="center" />
        <Paper shadow="sm" p="md" radius="md" withBorder>
          <Text size="sm" color="dimmed">
            “If SPID had existed back then, we might've tracked Webb’s signals before they made headlines.
            This project brings the stars closer to us.”
          </Text>
          <Text size="xs" mt="xs" align="right" fw={500}>— Reddit user from r/NASA</Text>
        </Paper>

        {/* Step 7: Final CTA */}
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
      </Container>

      {/* Step 9: Animated Mission Section */}
      <MissionSection />

      {/* Step 11: Footer */}
      <Footer />
    </>
  );
}