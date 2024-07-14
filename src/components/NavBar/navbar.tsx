import { useEffect, useRef, useState } from "preact/hooks";
import Style from "./navbar.module.scss";

function NavBar() {
  const lastScrollY = useRef(
    window.scrollY ?? document.documentElement.scrollTop
  );
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (event: Event) => {
    const scrollY = window.scrollY ?? document.documentElement.scrollTop;

    if (scrollY > lastScrollY.current) {
      setScrollDirection("down");
    } else if (scrollY < lastScrollY.current) {
      setScrollDirection("up");
    }

    lastScrollY.current = Math.abs(scrollY);
  };

  return (
    <div
      className={`${Style.NavBar} ${
        scrollDirection === "up" ? Style.Scrolled : ""
      }`}
    >
      <div className={Style.Links}>
        <a
          href="https://github.com/IamTC"
          className={Style.Link}
          title="IamTC | GitHub"
        >
          <img src="./assets/icons/github.svg" alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/thiwadiss/"
          className={Style.Link}
          title="Thiwanka Dissanayaka | LinkedIn"
        >
          <img src="./assets/icons/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
