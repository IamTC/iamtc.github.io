import { Project } from "./models/Project";

export const projects: Project[] = [
  {
    title: "LankaDealz (Freelance)",
    link: "https://lankadealz.com/",
    positions: [
      {
        period: {
          from: new Date(2023, 2, 1),
          to: new Date(2024, 2, 1),
        },
      },
    ],
    summary: `
      Worked with LankaDealz to build an ecommerce portal using React,
      Typescript, Styled-components, Redux Toolkit, .NET Web API and MSSQL.
      Developed with i18n and achieved 90% of the scores across all stats in lighthouse.
    `,
    tags: [
      "React",
      ".NET Web API",
      "Typescript",
      "Redux Toolkit",
      "MSSQL",
      "SASS",
      "styled-components",
      "Azure",
    ],
  },
  {
    title: "RoomHunt (Freelance)",
    link: "https://roomhunt.lk/",
    positions: [
      {
        period: {
          from: new Date(2021, 2, 1),
          to: new Date(2021, 9, 1),
        },
      },
    ],
    summary: `
      Developed a portal for auctioning unreserved hotel rooms using Angular, Typescript, Saas and NGRX.
Developed with fluid design to be responsive across any device. Achieved a
90% lighthouse score.
    `,
    tags: ["Typescript", "Angular", "NGRX", "SASS"],
  },
  {
    title: "HygieneZone (Freelance)",
    positions: [
      {
        period: {
          from: new Date(2021, 2, 1),
          to: new Date(2021, 9, 1),
        },
      },
    ],
    summary: `
      Implemented a web app for tracking and managing COVID related incidents in hotels. Developed using Angular and Typescript.
    `,
    tags: ["Typescript", "Angular"],
  },
  {
    title: "TripToMedic  (Freelance)",
    positions: [
      {
        period: {
          from: new Date(2019, 2, 1),
          to: new Date(2020, 12, 1),
        },
      },
    ],
    summary: `
      Built a medical tourism platform with Angular, Typescript and NGRX. Used Socket.io, WebRTC and NodeJS to implement alive video communication portal..
    `,
    tags: ["Typescript", "Angular", "NGRX", "Socket.io", "WebRTC", "NodeJS"],
  },
];
