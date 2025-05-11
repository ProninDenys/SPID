import { Container, Title, Text, Paper } from '@mantine/core';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

export default function MissionSection() {
  return (
    <Container size="md" py="xl">
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Paper shadow="md" p="xl" radius="md" withBorder>
          <Title order={2}>Our Mission</Title>
          <Text mt="md" size="lg">
            SpaceID (SPID) is dedicated to democratizing access to space data — connecting individuals, researchers, and developers with insights from the cosmos.
          </Text>
        </Paper>
      </MotionDiv>
    </Container>
  );
}