// src/components/LayoutWrapper.jsx
import { Container } from '@mantine/core';

export default function LayoutWrapper({ children }) {
  return (
    <div
      style={{
        background: 'radial-gradient(ellipse at top, #0d0d2b 0%, #000000 100%)',
        minHeight: '100vh',
        padding: '2rem 0',
        color: 'white',
      }}
    >
      <Container size="lg">{children}</Container>
    </div>
  );
}