import { NeatConfig, NeatGradient } from "@firecms/neat";
import { createPortal } from "preact/compat";
import { useEffect, useRef } from "preact/hooks";
import Styles from "./styles.module.scss";

export const config: NeatConfig = {
  colors: [
    {
      color: "#c7dee4",
      enabled: true,
    },
    {
      color: "#f1e8ca",
      enabled: true,
    },
    {
      color: "#ffffff",
      enabled: true,
    },
    {
      color: "#e7d5de",
      enabled: true,
    },
    {
      color: "#cec7da",
      enabled: false,
    },
  ],
  speed: 4,
  horizontalPressure: 3,
  verticalPressure: 3,
  waveFrequencyX: 2,
  waveFrequencyY: 2,
  waveAmplitude: 5,
  shadows: 6,
  highlights: 4,
  colorBrightness: 0.9,
  colorSaturation: 0.5,
  wireframe: false,
  colorBlending: 5,
  backgroundColor: "#003FFF",
  backgroundAlpha: 1,
  resolution: 1,
};
const NeatGradientBackground = () => {
  const canvasEl = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (canvasEl.current) {
      const neat = new NeatGradient({
        ref: canvasEl.current,
        ...config,
      });

      return () => neat.destroy();
    }
  }, []);

  return createPortal(
    <canvas className={Styles.CanvasElement} ref={canvasEl}></canvas>,
    document.documentElement
  );
};

export default NeatGradientBackground;
