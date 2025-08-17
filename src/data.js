import project from "./assets/pngs/project.png";
import anuta from "./assets/pngs/anuta.webp";
import apex from "./assets/pngs/apex.JPG";

export const ProjectData = [
  {
    name: "QuickOut",
    logo: project,
    duration: "June 2022 - August 2022",
    skills: ["NextJS", "ReactJS", "JavaScript", "HTML", "CSS", "MongoDB"],
    desc: [
      "Created a web application that helps students to apply for leaves and track them",
      "Multi-level authority to approve the leaves and declare holidays",
    ],
  },
  {
    name: "Form Builder",
    logo: project,
    duration: "June 2024",
    skills: ["ReactJS", "JavaScript", "HTML", "CSS", "Styled Components"],
    desc: [
      "Designed and developed automated workflows using Flow Builder to streamline business processes and reduce manual effort."
    ],
    
  },
];

export const ExperienceData = [
  {
    name: "Apex Lawn Company",
    logo: apex,
    duration: "Nov 2024 - Present",
    skills: ["ReactJS", "Next.JS", "JavaScript", "HTML", "CSS", "GTM", "SEO"],
    desc: [
      "Designed and developed multiple websites in React.js under the company’s portfolio, ensuring scalability, performance, and maintainability.",
      "Delivered clean, interactive, and responsive user interfaces, improving user engagement and accessibility across devices.",
      "Built SEO-friendly websites with Next.js, enhancing search engine visibility and driving organic traffic.",
      "Implemented Google Tag Manager and analytics integrations.",
      "Managed and integrated Google Ads campaigns."
    ],
    keyProjects: [
      "https://apexlawncompany.com",
      "https://apexship.net",
      "https://prana.healthcare"
    ],
  },
  {
    name: "Anuta Networks",
    logo: anuta,
    duration: "Dec 2023 - Aug 2024",
    skills: ["ReactJS", "Angular", "JavaScript", "HTML", "CSS", "SCSS"],
    desc: [
      "Developing features in ReactJS in a product called ATOM.",
      "Migrating Angular components to React.",
      "Fixing UI bugs.",
      "Track and update the JIRA tickets.",
    ],
  },
];
