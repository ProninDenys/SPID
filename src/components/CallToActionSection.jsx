import React from 'react';
import { Paper, Title, Text, Button, Group, Container } from '@mantine/core';

export default function CallToActionSection() {
  return (
    <Container size="sm" my="xl">
      <Paper shadow="md" radius="lg" p="xl" withBorder>
        <Title order={2} align="center" mb="md">
          Ready to Launch?
        </Title>
        <Text align="center" size="md" color="dimmed">
          The future of space data is being written now. Be part of the mission.
          Buy your SPID token and join the SpaceID journey today.
        </Text>
        <Group justify="center" mt="lg">
          <Button size="md" variant="filled" color="blue">
            🚀 Buy SPID Token
          </Button>
        </Group>
      </Paper>
    </Container>
  );
}
