import { useCallback, useEffect, useState } from "preact/hooks";
import Styles from "./navbar.module.scss";

const links = ["experience", "projects", "education", "skills"];

function NavBar() {
  const [activeEl, setActiveEl] = useState("experience");

  const handleIntersection = useCallback(
    (elements: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      console.log(elements);
      const intersect = (elements || []).find((el) => el.isIntersecting);
      if (intersect) {
        setActiveEl(intersect.target.id);
      }
    },
    []
  );

  useEffect(() => {
    const options = {
      rootMargin: "16px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    links.forEach((t) => {
      const el = document.querySelector(`#${t}`);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={Styles.NavBar}>
      {links.map((link, i) => (
        <a
          href={`#${link}`}
          key={i}
          className={`${Styles.Link} ${activeEl === link ? Styles.Active : ""}`}
        >
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
