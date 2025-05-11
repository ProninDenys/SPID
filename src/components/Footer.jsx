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
      }}
    >
      <Container size="md">
        <Group position="apart" align="center">
          <Text size="sm">© {new Date().getFullYear()} SpaceID (SPID). Inspired by NASA.</Text>
          <Group spacing="xs">
            <Anchor href="https://nasa.gov" target="_blank" color="gray">
              <IconWorld size={20} />
            </Anchor>
            <Anchor href="https://github.com" target="_blank" color="gray">
              <IconBrandGithub size={20} />
            </Anchor>
            <Anchor href="https://twitter.com" target="_blank" color="gray">
              <IconBrandX size={20} />
            </Anchor>
          </Group>
        </Group>
      </Container>
    </footer>
  );
}