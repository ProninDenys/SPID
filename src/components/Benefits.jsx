import { Container, Title, Text, Paper, Group, SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
import {
  IconRocket,
  IconDatabase,
  IconShieldCheck,
  IconChartBar,
} from '@tabler/icons-react';

const MotionPaper = motion(Paper);

const benefits = [
  {
    icon: <IconRocket size={28} />,
    title: 'NASA-Driven Vision',
    description: 'Inspired by real space missions and data use cases from NASA.',
  },
  {
    icon: <IconDatabase size={28} />,
    title: 'Decentralized Research',
    description: 'Access and contribute to space exploration data on-chain.',
  },
  {
    icon: <IconShieldCheck size={28} />,
    title: 'Security First',
    description: 'Built with modern cryptographic and Web3 security standards.',
  },
  {
    icon: <IconChartBar size={28} />,
    title: 'Real Utility',
    description: 'Used by space researchers, developers, and explorers.',
  },
];

export default function Benefits() {
  return (
    <Container size="md" py="xl">
      <Title order={2} mb="md">Why Choose SPID?</Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
        {benefits.map((benefit, index) => (
          <MotionPaper
            key={index}
            withBorder
            p="md"
            radius="md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Group>
              {benefit.icon}
              <div>
                <Text fw={500}>{benefit.title}</Text>
                <Text size="sm" c="dimmed">{benefit.description}</Text>
              </div>
            </Group>
          </MotionPaper>
        ))}
      </SimpleGrid>
    </Container>
  );
}