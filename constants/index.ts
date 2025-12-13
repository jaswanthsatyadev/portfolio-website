import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GitHubIcon from "@/components/icons/GitHubIcon";

export const ALL_SKILLS = [
  {
    skill_name: "HTML",
    image: "/skills/html.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "CSS",
    image: "/skills/css.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "JavaScript",
    image: "/skills/javascript.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "C++",
    image: "/skills/cpp.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Python",
    image: "/skills/python.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "React.js",
    image: "/skills/react.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Next.js",
    image: "/skills/nextjs.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Prisma",
    image: "/skills/light-prisma-svgrepo-com.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Node.js",
    image: "/skills/nodejs-icon-svgrepo-com.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "n8n",
    image: "/skills/n8n-color.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "WordPress",
    image: "/skills/wordpress-svgrepo-com.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Docker",
    image: "/skills/icons8-docker.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Figma",
    image: "/skills/figma-svgrepo-com.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Express.js",
    image: "/skills/expressjs.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "FastAPI",
    image: "/skills/fastapi-1.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Tailwind CSS",
    image: "/skills/tailwind-svgrepo-com.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Bootstrap",
    image: "/skills/bootstrap.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "SQL",
    image: "/skills/light-prisma-svgrepo-com.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Godot",
    image: "/skills/Godot Engine.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Git",
    image: "/skills/git-logo-svg_svgstack_com_28381751178596.svg",
    width: 62,
    height: 62,
  },
  {
    skill_name: "Selenium",
    image: "/skills/selenium-svgrepo-com.svg",
    width: 62,
    height: 62,
  },  
  {
    skill_name: "Pytest",
    image: "/skills/pytest.svg",
    width: 62,
    height: 62,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/jaswanth-satya-dev/",
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
    link: "https://github.com/jaswanthsatyadev",
  },
] as const;


// Projects Data
export const PROJECTS = [
  {
    title: "MediMate AI",
    image: "/projects/project1.png",
    description:
      "An AI-powered virtual health assistant that helps users check symptoms, track meds, and get instant health insights. Your personal ChatGPT for healthcare.",
    link: "https://medimate-7od6.vercel.app/health-analysis",
    tags: ["Genkit", "Next.js", "Firebase", "Gemini"],
  },
  {
    title: "AutoFare - Bus Booking System",
    image: "/projects/project2.png",
    description:
      "An AI‑powered smart ticket verification system for public buses using real-time selfie verification against CCTV frames to reduce fare evasion and speed up boarding.",
    link: "https://app--tsrtc-e-ticket-e7682f18.base44.app/login?from_url=https://app--tsrtc-e-ticket-e7682f18.base44.app/Auth&app_id=68550138c423788fe7682f18",
    tags: ["API", "Next.js", "MongoDB", "Typescript"],
  },
  {
    title: "AutoFare - AI Backend",
    image: "/projects/project3.png",
    description:
      "High-performance backend enabling real-time face verification between a passenger’s selfie and CCTV snapshots from inside public buses, using face-api.js.",
    link: "https://auto-fare.vercel.app/",
    tags: ["Node.js", "Face Recognition", "Genkit", "MongoDB"],

  },
  {
    title: "AI Learning Hub",
    image: "/projects/project4.png",
    description:
      "A personalized learning platform powered by AI that helps users master AI, ML, and Data Science with smart roadmaps and curated resources.",
    link: "https://ai-learing-hub.netlify.app/",
    tags: ["Next.js", "llama", "HuggingFace", "Supabase"],
  },
  {
    title: "Sanctuary Sphere",
    image: "/projects/project5.png",
    description:
      "This website is made completely using HTML and Vanilla CSS .",
    link: "https://sanctuary-sphere.vercel.app/",
    tags: [ "HTML", "CSS", "Spline"],
  },
  // {
  //   title: "AutoTestGenie",
  //   image: "",
  //   description:
  //     "This website is made for testers to generate selenium and pytest code instantly which modern AI chat bots fail to achive.",
  //   link: "",
  //   tags: [ "ReactJS", "FastAPI", "TailwindCSS"],

  // },
  {
    title: "Steel Of Shadows",
    image: "/projects/project6.png",
    description:
      "This is a 2D Game developed using Godot Engine.\nNote : Please wait for the game to load while opening",
    link: "https://xpsoft.itch.io/dungescape",
    tags: [ "Godot", "GDScript","OOPS"]

  },
  {
    title: "Adskipper: Auto Skip Ads",
    image: "/projects/project.png",
    description:
      "This is native android app that can skip ads for you while you are watching youtube, Avaliable on play store",
    link: "https://adskipper.evolvarc.com/",
    tags: [ "Kotlin", "Android Development","Accessibility"]

  },
];



export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/jaswanthsatyadev",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/jaswanthsatydev",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/jaswanth-satya-dev/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:jaswanthsatyadev55@gmail.com",
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
] as const;

export const LINKS = {
  sourceCode: "https://github.com/jaswanthsatyadev/MyPortfolio?tab=readme-ov-file",
} as const;
