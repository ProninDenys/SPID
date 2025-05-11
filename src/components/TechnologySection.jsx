// src/components/TechnologySection.jsx
import { Title, Text, Paper, Grid, ThemeIcon } from '@mantine/core';
import { IconServer, IconShieldLock, IconApi, IconPlanet } from '@tabler/icons-react';

export default function TechnologySection() {
  return (
    <section>
      <Title order={2} ta="center" mb="lg">
        🧠 Underlying Technology
      </Title>

      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper p="md" radius="md" shadow="sm" withBorder>
            <ThemeIcon size="lg" radius="xl" variant="light" color="blue">
              <IconServer size={24} />
            </ThemeIcon>
            <Title order={4} mt="md">Blockchain Infrastructure</Title>
            <Text c="dimmed" fz="sm">
              Built on a scalable, secure blockchain that ensures full transparency and decentralization.
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper p="md" radius="md" shadow="sm" withBorder>
            <ThemeIcon size="lg" radius="xl" variant="light" color="blue">
              <IconApi size={24} />
            </ThemeIcon>
            <Title order={4} mt="md">Real-time API Access</Title>
            <Text c="dimmed" fz="sm">
              Query and retrieve astronomical data through advanced developer APIs.
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper p="md" radius="md" shadow="sm" withBorder>
            <ThemeIcon size="lg" radius="xl" variant="light" color="blue">
              <IconShieldLock size={24} />
            </ThemeIcon>
            <Title order={4} mt="md">Military-grade Security</Title>
            <Text c="dimmed" fz="sm">
              End-to-end encryption, cryptographic keys, and Web3 authentication baked in.
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper p="md" radius="md" shadow="sm" withBorder>
            <ThemeIcon size="lg" radius="xl" variant="light" color="blue">
              <IconPlanet size={24} />
            </ThemeIcon>
            <Title order={4} mt="md">NASA-Inspired Architecture</Title>
            <Text c="dimmed" fz="sm">
              Designed using principles and open-source tools from real NASA mission software.
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </section>
  );
}