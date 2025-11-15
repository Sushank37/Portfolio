import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "postgresql",
    image: "postgresql.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "go",
    image: "go.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/sushank_singh37?utm_source=ig_web_button_share_sheet&igsh=MXA2dW15OHJ3MGg1bQ==",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/sushanksingh37",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },


  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },


] as const;

export const FULLSTACK_SKILL = [] as const;

export const OTHER_SKILL = [] as const;

export const PROJECTS = [
 
  {
    title: "Speed Line Auto Parts",

    image: "/projects/project-3.webp",
    link: "https://speedlineautoparts.netlify.app/",
  },
  {
    title: "StallPay",

    image: "/projects/Screenshot 2025-11-14 at 9.42.46 AM.png",
    link: "https://stallpay.netlify.app/",
  },
  {
    title: "Agriconnect",

    image: "/projects/Screenshot 2025-11-15 at 10.50.34 AM.png",
    link: "https://farmroute2home.netlify.app/",
  },
] as const;

export const CERTIFICATES = [
  {
    title: "Frontend developer(React)",
    image: "/certificates/Screenshot 2025-10-20 at 11.38.45 AM.png",
    link: "https://www.hackerrank.com/certificates/iframe/01e0224e3027",
  },
  {
    title: "Python Basics",
    image: "/certificates/Screenshot 2025-10-20 at 11.51.02 AM.png",
    link: "https://www.hackerrank.com/certificates/iframe/a2ee146d8bb8",
  },
  {
    title: "JavaScript Intermediate",
    image: "/certificates/Screenshot 2025-11-13 at 1.10.36 PM.png",
    link: "https://www.hackerrank.com/certificates/iframe/3f0295048fb4",
  },
  {
    title: "SQL Basics",
    image: "/certificates/Screenshot 2025-11-13 at 1.24.35 PM.png",
    link: "https://www.hackerrank.com/certificates/iframe/71019206f55az",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Sushank37",
      },

    ],
  },
  {
    title: "Social Media",
    data: [

      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/sushank-singh-a59bbb300/",
      },
    ],
  },
  {
    title: "About",
    data: [
   
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:sushanksingh37@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Certificates",
    link: "#certificates",
  },
] as const;


