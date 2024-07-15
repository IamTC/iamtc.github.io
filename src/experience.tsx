import { Project } from "./models/Project";

export const experience: Project[] = [
  {
    title: "MyBudget",
    link: "https://www.mybudget.com.au/",
    positions: [
      {
        position: "Senior Software Engineer",
        period: {
          from: new Date(2023, 5, 1),
          to: new Date(),
        },
      },
      {
        position: "Software Engineer",
        period: {
          from: new Date(2021, 10, 1),
          to: new Date(2023, 5, 1),
        },
      },
    ],
    summary: `
      Worked with Javascript, Typescript, React, Angular, CSS, SASS, and
      more for developing front end solutions Ensured code
      maintainability by meticulous unit tests andintegration tests
      using Jasmine, Jest and Cypress. Implemented and developed CI/CD
      pipelines using CircleCI and Bitbucket Pipelines. Worked with
      Google Cloud Platform to manage cloud workloads. Took
      responsibility in mentoring junior developers, reviewing and
      providing feedback for code. Worked alongside product & project
      managers, designers and other developers to develop user centric
      solutions. Developed developer tools to improve developer
      experience and cutdown debugging time.
    `,
    tags: [
      "Typescript",
      "React",
      "Angular",
      "Redux",
      "Firestore",
      "SASS",
      "Jest",
      "Jasmine",
      "Cypress",
      "GCP",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    title: "Zone24x7",
    link: "https://zone24x7.com/",
    positions: [
      {
        position: "Software Engineer",
        period: {
          from: new Date(2021, 8, 1),
          to: new Date(2021, 10, 1),
        },
      },
      {
        position: "Trainee Associate Software Engineer",
        period: {
          from: new Date(2017, 9, 1),
          to: new Date(2021, 8, 1),
        },
      },
    ],
    summary: `
      Developed features for an enterprise resource planning solution with
      React, Angular, ASP.Net, .Net Core, MSSql and NodeJS.Worked with Azure DevOps and Jenkins to manage CI/CD. Was
      responsible for migrating Jenkins pipelines to Azure DevOps. Achieved ~50% lower initial load time in a solution by improving
      database queries. Took responsibility in managing a client facing solution as the solo
      developer, improving performance and implementing new features
      in both frontend and backend.
    `,
    tags: [
      "Typescript",
      "React",
      "Angular",
      "SASS",
      "ASP.NET",
      ".NET",
      "NodeJS",
      "MSSQL",
      "Azure",
      "Jenkins",
    ],
  },
];
