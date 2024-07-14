import { NeatConfig, NeatGradient } from "@firecms/neat";
import { createPortal } from "preact/compat";
import { useEffect, useRef } from "preact/hooks";
import Styles from "./styles.module.scss";

export const config: NeatConfig = {
  colors: [
    {
      color: "#030c24",
      enabled: true,
    },
    {
      color: "#07131d",
      enabled: true,
    },
    {
      color: "#130216",
      enabled: true,
    },
  ],
  speed: 1,
  horizontalPressure: 3,
  verticalPressure: 3,
  waveFrequencyX: 1,
  waveFrequencyY: 1,
  waveAmplitude: 1,
  shadows: 10,
  highlights: 6,
  colorBrightness: 1,
  colorSaturation: 0.5,
  wireframe: false,
  colorBlending: 1,
  backgroundColor: "#100329",
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
    return;
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
