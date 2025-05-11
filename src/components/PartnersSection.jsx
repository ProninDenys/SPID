// src/components/PartnersSection.jsx
import { Title, Text, SimpleGrid, Paper, Image } from '@mantine/core';

const partners = [
  {
    name: 'NASA Open Data',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg',
    description: 'Providing real mission telemetry and open science archives.',
  },
  {
    name: 'ESA',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/ESA_logo.svg',
    description: 'European Space Agency contributing satellite feeds and tools.',
  },
  {
    name: 'OpenAI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/OpenAI_Logo.svg',
    description: 'Partnering in AI-driven signal decoding and data analysis.',
  },
];

export default function PartnersSection() {
  return (
    <section>
      <Title order={2} ta="center" mb="lg">
        🤝 Strategic Partners
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {partners.map((partner) => (
          <Paper
            key={partner.name}
            p="md"
            shadow="sm"
            radius="md"
            withBorder
            style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.02)' }}
          >
            <Image src={partner.logo} alt={partner.name} height={60} fit="contain" mb="sm" />
            <Text fw={600}>{partner.name}</Text>
            <Text size="sm" color="dimmed">
              {partner.description}
            </Text>
          </Paper>
        ))}
      </SimpleGrid>
    </section>
  );
}
