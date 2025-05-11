// src/components/PartnersSection.jsx
import { Title, Text, Paper, Button, Group, Divider } from '@mantine/core';

export default function PartnersSection() {
  return (
    <section style={{ marginTop: '4rem' }}>
      <Divider my="xl" label="🤝 Partners in Action" labelPosition="center" />

      <Paper
        shadow="xl"
        radius="md"
        p="xl"
        withBorder
        style={{
          background: 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
        }}
      >
        <Title order={2} mb="sm">
          Backed by the Best
        </Title>
        <Text size="md" color="gray.3">
          SpaceID collaborates with NASA Open Data, Chainlink, and Web3 infrastructure leaders to ensure transparency, accuracy, and access to decentralized datasets. These aren't just names — these are live integrations powering our mission.
        </Text>

        <Group justify="center" mt="lg">
          <Button size="md" variant="outline" color="blue">
            🌐 View Partner Integrations
          </Button>
        </Group>
      </Paper>
    </section>
  );
}