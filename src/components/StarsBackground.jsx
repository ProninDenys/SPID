// src/components/StarsBackground.jsx
import Particles from 'react-tsparticles';
import { loadFull } from "@tsparticles/engine";

export default function StarsBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: '#0d0d2b',
          },
        },
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          opacity: {
            value: 0.6,
            random: true,
          },
          size: {
            value: 1.5,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: 'none',
            outModes: {
              default: 'out',
            },
          },
        },
      }}
    />
  );
}