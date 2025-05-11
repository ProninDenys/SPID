import { Button, Container, Title } from '@mantine/core';

export default function App() {
  return (
    <Container>
      <Title order={1}>Привет, Mantine 👋</Title>
      <Button mt="md">Нажми меня</Button>
    </Container>
  );
}