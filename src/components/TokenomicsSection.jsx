import { Title, Text, Grid, Paper } from '@mantine/core';

const technologies = [
  {
    title: 'On-Chain NASA Datasets',
    description: 'Access verified scientific datasets directly through smart contracts.',
  },
  {
    title: 'AI-Powered Indexing',
    description: 'We use ML models to scan and classify cosmic signals in real time.',
  },
  {
    title: 'Cross-Agency APIs',
    description: 'Unified API layer for data from NASA, ESA, and other space agencies.',
  },
];

export default function TechnologySection() {
  return (
    <section>
      <Title order={2} align="center" mb="xl" className="glow">🧪 Technology</Title>
      <Grid>
        {technologies.map((tech, index) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={index}>
            <Paper shadow="lg" p="md" radius="md" withBorder>
              <Title order={4}>{tech.title}</Title>
              <Text mt="xs" size="sm" color="dimmed">
                {tech.description}
              </Text>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </section>
  );
}
