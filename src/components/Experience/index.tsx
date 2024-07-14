import { Project } from "../../models/Project";
import Card from "../Card";
import Chip from "../Chip";
import Styles from "./styles.module.scss";

export const today = new Date();
const getDisplayDate = (date: Date | undefined) => {
  if (!date || date.valueOf() === today.valueOf()) {
    return "Present";
  }

  return date.getFullYear();
};

const Experience = (props: { projects: Project[]; title: string }) => {
  const handleClick = (experience: Project) => {
    window.open(experience.link, "_blanck")?.focus();
  };

  return (
    <div className={Styles.ExperienceWrapper}>
      <h3>{props.title}</h3>

      {props.projects.map((exp, index) => (
        <div
          className={`${Styles.Experience} ${!exp.link && Styles.Disabled}`}
          onClick={() => exp.link && handleClick(exp)}
        >
          <div className={Styles.Period}>
            {getDisplayDate(exp.positions.at(-1)?.period.from)} -{" "}
            {getDisplayDate(exp.positions.at(0)?.period.to)}
          </div>

          <Card key={index} className={Styles.Details}>
            <Card.Header>
              <h3 className={Styles.Employer}>{exp.title}</h3>
              {exp.positions.map((pos) => (
                <p className={Styles.Position}>{pos.position}</p>
              ))}
            </Card.Header>
            <Card.Content>
              <p className={Styles.Summary}>{exp.summary}</p>
            </Card.Content>
            <Card.Footer className={Styles.CardFooter}>
              {exp.tags.map((tag, index) => (
                <Chip text={tag} key={index}></Chip>
              ))}
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Experience;
