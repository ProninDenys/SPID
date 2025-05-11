// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
  withGlobalStyles
  withNormalizeCSS
  theme={{
    colorScheme: 'dark',
    fontFamily: 'Inter, sans-serif',
    primaryColor: 'blue',
    headings: {
      fontWeight: 700,
    },
  }}
>
      <App />
    </MantineProvider>
  </React.StrictMode>
);