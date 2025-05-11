import { useCallback } from "react";
import { loadFull } from "@tsparticles/engine";
import { Particles } from "@tsparticles/react";

export default function StarsBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "#0d0d2b" } },
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          opacity: { value: 0.6, random: true },
          size: { value: 1.5, random: true },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: { default: "out" },
          },
        },
      }}
    />
  );
}