// src/components/Footer.jsx
import { Container, Text, Group, Anchor } from '@mantine/core';
import { IconBrandGithub, IconBrandX, IconWorld } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(90deg, #0f2027, #203a43, #2c5364)',
        color: 'white',
        padding: '2rem 0',
        marginTop: '4rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container size="md" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <Text size="sm">© {new Date().getFullYear()} SpaceID (SPID). Inspired by NASA.</Text>
        <Group spacing="xs">
          <Anchor href="#top" style={{ color: 'white' }}>Back to Top</Anchor>
          <Anchor href="#mission" style={{ color: 'white' }}>Mission</Anchor>
          <Anchor href="#benefits" style={{ color: 'white' }}>Benefits</Anchor>
          <Anchor href="#tokenomics" style={{ color: 'white' }}>Tokenomics</Anchor>
          <Anchor href="#technology" style={{ color: 'white' }}>Technology</Anchor>
          <Anchor href="#partners" style={{ color: 'white' }}>Partners</Anchor>
          <Anchor href="#faq" style={{ color: 'white' }}>FAQ</Anchor>
        </Group>
        <Group spacing="xs" mt={{ base: 'md', md: 0 }}>
          <Anchor href="https://nasa.gov" target="_blank" style={{ color: 'white' }}>
            <IconWorld size={20} />
          </Anchor>
          <Anchor href="https://github.com" target="_blank" style={{ color: 'white' }}>
            <IconBrandGithub size={20} />
          </Anchor>
          <Anchor href="https://twitter.com" target="_blank" style={{ color: 'white' }}>
            <IconBrandX size={20} />
          </Anchor>
        </Group>
      </Container>
    </footer>
  );
}
