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
    image: "/skills/godot-engine.svg",
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
      "An AI-powered virtual health assistant that streamlines patient care. It offers instant symptom checks, medication tracking, and health insights—effectively a personal ChatGPT for healthcare, designed to reduce consultation wait times.",
    link: "https://medimate-7od6.vercel.app/health-analysis",
    tags: ["Genkit", "Next.js", "Firebase", "Gemini"],
  },
  {
    title: "AutoFare - Bus Booking System",
    image: "/projects/project2.png",
    description:
      "A smart ticket verification system leveraging real-time facial recognition. It eliminates fare evasion and speeds up boarding by verifying passenger selfies against CCTV frames, optimizing public transport efficiency.",
    link: "https://app--tsrtc-e-ticket-e7682f18.base44.app/login?from_url=https://app--tsrtc-e-ticket-e7682f18.base44.app/Auth&app_id=68550138c423788fe7682f18",
    tags: ["API", "Next.js", "MongoDB", "Typescript"],
  },
  {
    title: "AutoFare - AI Backend",
    image: "/projects/project3.png",
    description:
      "The high-performance engine behind AutoFare. It processes real-time face verification between passenger selfies and CCTV snapshots using face-api.js, ensuring scalable and secure authentication for mass transit.",
    link: "https://auto-fare.vercel.app/",
    tags: ["Node.js", "Face Recognition", "Genkit", "MongoDB"],

  },
  {
    title: "AI Learning Hub",
    image: "/projects/project4.png",
    description:
      "A personalized, AI-driven learning platform that curates smart roadmaps for mastering AI, ML, and Data Science. It cuts through the noise to provide a direct, efficient path to upskilling.",
    link: "https://ai-learing-hub.netlify.app/",
    tags: ["Next.js", "llama", "HuggingFace", "Supabase"],
  },
  {
    title: "Sanctuary Sphere",
    image: "/projects/project5.png",
    description:
      "A visually immersive web experience built with pure HTML and Vanilla CSS, demonstrating that elegant design doesn't always require complex frameworks.",
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
      "A 2D action game developed in Godot. It showcases object-oriented programming principles in a real-time interactive environment.",
    link: "https://xpsoft.itch.io/dungescape",
    tags: [ "Godot", "GDScript","OOPS"]

  },
  {
    title: "Adskipper: Auto Skip Ads",
    image: "/projects/project7.png",
    description:
      "A native Android utility that automatically skips YouTube ads, saving users time and enhancing their viewing experience. A practical automation tool available on the Play Store.",
    link: "https://play.google.com/store/apps/details?id=com.evolvarc.adskipper",
    tags: [ "Kotlin", "Android Development","Accessibility"]

  },
  {
    title: "Stockpulse: Stock Market News",
    image: "/projects/project8.png",
    description:
      "This is your one stop solution app for all your stock market news needs in a very organised manner, Avaliable on play store",
    link: "https://play.google.com/store/apps/details?id=com.evolvarc.stockpulse",
    tags: [ "Flutter", "PostgreSQL", "RSS Feeds Scrapper", "Kotak Neo API"]

  },
  {
    title: "Ember: Music App",
    image: "/projects/project9.png",
    description:
      "This is a music app just like spotify, has a collection of more than 100 million songs for free, organised beautifully with material 3 expressive design, download and check it out",
    link: "https://github.com/jaswanthsatyadev/ember-releases/releases",
    tags: [ "Kotlin","ytmusic-api (unofficial)", "Spotify API"]

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
  buyCoffee: "https://razorpay.me/@jaswanthsatyadev",
} as const;
