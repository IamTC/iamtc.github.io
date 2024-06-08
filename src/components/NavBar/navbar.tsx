import Style from "./navbar.module.scss";

function NavBar() {
  return (
    <div className={Style.NavBar}>
      <div className={Style.Links}>
        <a href="https://github.com/IamTC" className={Style.Link}>
          <img src="./assets/icons/github.svg" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/thiwadiss/" className={Style.Link}>
          <img src="./assets/icons/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
