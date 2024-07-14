import { NeatConfig, NeatGradient } from "@firecms/neat";
import { createPortal } from "preact/compat";
import { useEffect, useRef } from "preact/hooks";
import Styles from "./styles.module.scss";

export const config: NeatConfig = {
  colors: [
    {
      color: "#071641",
      enabled: true,
    },
    {
      color: "#0f2a3f",
      enabled: true,
    },
    {
      color: "#252008",
      enabled: true,
    },
    {
      color: "#24052e",
      enabled: true,
    },
    {
      color: "#251049",
      enabled: false,
    },
  ],
  speed: 4,
  horizontalPressure: 3,
  verticalPressure: 3,
  waveFrequencyX: 2,
  waveFrequencyY: 2,
  waveAmplitude: 2,
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
    <div className={Styles.CanvasElement}>
      <canvas ref={canvasEl}></canvas>
      <div className={Styles.placeholder}></div>
    </div>,
    document.documentElement
  );
};

export default NeatGradientBackground;
