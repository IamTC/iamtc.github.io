import { useState, useRef, useEffect } from "preact/hooks";

import ProfileImage from "../ProfileImage";
import Styles from "./intro.module.scss";

function Intro() {
  const subTexts = [
    "Software Engineer",
    "Frontend Developer",
    "Gamer",
  ] as const;
  const currentSubTextsIndex = useRef(0);
  const currentTextIndex = useRef(0);
  const [occupation, setOccupation] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const text = subTexts[currentSubTextsIndex.current] ?? "";
      const character = text?.[currentTextIndex.current] ?? "";
      setOccupation((oldOccupation) => oldOccupation + character);

      if (currentTextIndex.current === text.length + 6) {
        currentTextIndex.current = -6;
        if (currentSubTextsIndex.current === subTexts.length) {
          currentSubTextsIndex.current = 0;
        } else {
          currentSubTextsIndex.current++;
          setOccupation("");
        }
      } else {
        currentTextIndex.current++;
      }
    }, 125);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={Styles.IntroContainer}>
      <div class={Styles.title}>
        <h1 class={Styles.name}>Thiwanka Dissanayaka</h1>
        <h2 class={Styles.subtext}>
          {occupation}
          <span class={Styles.Cursor}>_</span>
        </h2>
      </div>

      <div class="prof-image">
        <ProfileImage path="assets/meRelit.png" />
      </div>
    </div>
  );
}

export default Intro;
