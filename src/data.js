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
      "Designed and developed automated workflows using Flow Builder to streamline business processes and reduce manual effort.",
    ],
  },
];

export const ExperienceData = [
  {
    name: "Apex Lawn Company",
    logo: apex,
    duration: "Nov 2024 - Present",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "HTML",
      "CSS",
      "GTM",
      "SEO",
      "REST API",
    ],
    desc: [
      "Developed responsive, high-performance web applications using React.js and Next.js, building reusable and modular UI components that improved maintainability and accelerated development efficiency.",
      "Leveraged AI-tools such as GitHub Copilot to accelerate coding, improving development speed by ~40-50% while maintaining code quality.",
      "Integrated REST APIs to handle dynamic data and enable seamless frontend-backend communication.",
      "Implemented responsive layouts to ensure a consistent user experience across desktop, tablet, and mobile devices.",
      "Debugged application issues and managed deployments on Vercel.",
      "Implemented Google Tag Manager, Google Analytics, and Google Ads integrations to support marketing insights and user tracking.",
    ],
    keyProjects: [
      "https://apexlawncompany.com",
      "https://apexship.net",
      "https://prana.healthcare",
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
