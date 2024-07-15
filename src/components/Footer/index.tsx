import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <small className={Styles.byline}>
        Built with Astro and Preact, deployed to Github pages using Github
        actions. Coded in Visual Studio Code. Uses Nunito typeface.
      </small>
    </footer>
  );
}
export default Footer;
