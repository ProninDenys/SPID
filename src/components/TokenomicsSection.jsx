// src/components/TokenomicsSection.jsx
import { Title, Text, Paper, Grid, ThemeIcon } from '@mantine/core';
import { IconCoins, IconPieChart, IconUsers, IconArrowUpRight } from '@tabler/icons-react';

export default function TokenomicsSection() {
  return (
    <section>
      <Title order={2} ta="center" mb="lg">
        💰 Tokenomics Overview
      </Title>

      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper p="md" radius="md" shadow="sm" withBorder>
            <ThemeIcon size="lg" radius="xl" variant="light" color="green">
              <IconCoins size="1.5rem" />
            </ThemeIcon>
            <Title order={4} mt="md">Total Supply</Title>
            <Text c="dimmed" fz="sm">
              1,000,000,000 SPID tokens minted with a fixed supply — no inflation.
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper p="md" radius="md" shadow="sm" withBorder>
            <ThemeIcon size="lg" radius="xl" variant="light" color="orange">
              <IconPieChart size="1.5rem" />
            </ThemeIcon>
            <Title order={4} mt="md">Token Distribution</Title>
            <Text c="dimmed" fz="sm">
              40% Community, 25% Development, 20% Treasury, 10% Team, 5% Advisors.
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper p="md" radius="md" shadow="sm" withBorder>
            <ThemeIcon size="lg" radius="xl" variant="light" color="cyan">
              <IconUsers size="1.5rem" />
            </ThemeIcon>
            <Title order={4} mt="md">Governance Utility</Title>
            <Text c="dimmed" fz="sm">
              SPID holders can vote on future missions, data access rights, and platform upgrades.
            </Text>
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper p="md" radius="md" shadow="sm" withBorder>
            <ThemeIcon size="lg" radius="xl" variant="light" color="violet">
              <IconArrowUpRight size="1.5rem" />
            </ThemeIcon>
            <Title order={4} mt="md">Staking & Rewards</Title>
            <Text c="dimmed" fz="sm">
              Stake SPID tokens to earn passive income while contributing to mission validation.
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </section>
  );
}