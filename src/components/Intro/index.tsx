import { useState, useRef, useEffect } from "preact/hooks";

import ProfileImage from "../ProfileImage";
import Styles from "./intro.module.scss";

function Intro() {
  const subTexts = [
    "Software Engineer",
    "Frontend Developer",
    "Gamer",
    "Hiker",
  ] as const;
  const currentSubTextsIndex = useRef(0);
  const currentTextIndex = useRef(0);
  const [occupation, setOccupation] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // TODO: Create a shared component for typing indicator
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

      setIsTyping(!!character);
    }, 125);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={Styles.IntroContainer}>
      <div className={Styles.title}>
        <h1 className={Styles.name}>Thiwanka Dissanayaka</h1>
        <h2 className={Styles.subtext}>
          {occupation}
          <span
            className={`${Styles.Cursor} ${isTyping ? Styles.typing : null}`}
          >
            |
          </span>
        </h2>
      </div>

      <div className={Styles.ProfImage}>
        <ProfileImage path="assets/meRelit.png" />
      </div>
    </div>
  );
}

export default Intro;
