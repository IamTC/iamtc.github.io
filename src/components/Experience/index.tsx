import { Project } from "../../models/Project";
import Card from "../Card";
import Chip from "../Chip";
import Styles from "./styles.module.scss";

const today = new Date();

const isSameMonth = (date: Date) => {
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth()
  );
};

const getDisplayDate = (date: Date | undefined) => {
  if (!date || isSameMonth(date)) {
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
          {exp.positions && (
            <div className={Styles.Period}>
              {getDisplayDate(exp.positions.at(-1)?.period.from)} —{" "}
              {getDisplayDate(exp.positions.at(0)?.period.to)}
            </div>
          )}

          <Card key={index} className={Styles.Details}>
            <Card.Header>
              <h3 className={Styles.Employer}>{exp.title}</h3>
              {exp.positions &&
                exp.positions.map((pos) => (
                  <p className={Styles.Position}>{pos.position}</p>
                ))}
            </Card.Header>
            <Card.Content>
              <p className={Styles.Summary}>{exp.summary}</p>
            </Card.Content>
            <Card.Footer>
              <div className={Styles.TagContainer}>
                {exp.tags.map((tag, index) => (
                  <Chip text={tag} key={index}></Chip>
                ))}
              </div>
              {exp.images && (
                <div class={Styles.ProjectImage}>
                  <img
                    src={`assets/images/thumbnails/${exp.images[0]}`}
                    alt={exp.title}
                  />
                </div>
              )}
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Experience;
