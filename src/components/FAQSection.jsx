import { Accordion, Container, Title, Text } from '@mantine/core';

export default function FAQSection() {
  return (
    <Container size="md" my="xl">
      <Title order={2} ta="center" mb="md" c="blue.4">
        🤔 Frequently Asked Questions
      </Title>
      <Text ta="center" mb="xl" size="md" color="dimmed">
        Find answers to the most common questions about the SPID token and our mission.
      </Text>

      <Accordion variant="separated" radius="md" defaultValue="q1">
        <Accordion.Item value="q1">
          <Accordion.Control>What is SPID?</Accordion.Control>
          <Accordion.Panel>
            SPID is a blockchain token that gives you access to open space research data and collaborative scientific tools.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="q2">
          <Accordion.Control>How can I use SPID?</Accordion.Control>
          <Accordion.Panel>
            SPID can be used to access data sets, participate in research funding, and collaborate on inter-agency missions.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="q3">
          <Accordion.Control>Is there a real-world application?</Accordion.Control>
          <Accordion.Panel>
            Yes. SPID supports real researchers and developers by providing tools and verified cosmic data to help projects thrive.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="q4">
          <Accordion.Control>When will the token launch?</Accordion.Control>
          <Accordion.Panel>
            The token release is planned for Q3 2025 with early community rewards and partnership announcements.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
