import { Project } from "./models/Project";

export const projects: Project[] = [
  {
    title: "LankaDealz (Freelance)",
    link: "https://lankadealz.com/",
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
    images: ["lankadealz.jpg"],
  },
  {
    title: "RoomHunt (Freelance)",
    link: "https://roomhunt.lk/",
    summary: `
      Developed a portal for auctioning unreserved hotel rooms using Angular, Typescript, Saas and NGRX.
Developed with fluid design to be responsive across any device. Achieved a
90% lighthouse score.
    `,
    tags: ["Typescript", "Angular", "NGRX", "SASS"],
    images: ["roomhunt.jpg"],
  },
  {
    title: "Subtraid (Freelance)",
    summary: `
      ERP software built for production company. Implemented using Angular. 
    `,
    tags: ["Typescript", "Angular"],
    images: ["subtraid.jpg"],
  },
  {
    title: "TripToMedic  (Freelance)",
    summary: `
      Built a medical tourism platform with Angular, Typescript and NGRX. Used Socket.io, WebRTC and NodeJS to implement alive video communication portal..
    `,
    tags: ["Typescript", "Angular", "NGRX", "Socket.io", "WebRTC", "NodeJS"],
    images: ["t2m.jpg", "t2m-chat.jpg"],
  },
];
