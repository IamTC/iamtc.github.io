import Styles from "./styles.module.scss";

const Chip = ({ text }: { text: string }) => {
  return <span className={Styles.Tag}>{text}</span>;
};

export default Chip;
