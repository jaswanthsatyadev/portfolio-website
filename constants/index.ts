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
import TwitterIcon from "@/components/icons/TwitterIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

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
  {
    name: "Twitter",
    icon: TwitterIcon,
    link: "https://x.com/jaswanthsatydev",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/jaswanthsatyadev/",
  },
] as const;


// Projects Data
export const PROJECTS = [
  {
    title: "MrCakeWala",
    image: "/projects/project10.png",
    description:
      "An Cake ordering and delivery system with end to end integrations such as payment gateway, delivery tracking, admin panel, refferal system, wallet and money managment",
    link: "https://app.mrcakewala.com/",
    tags: ["supabase", "Next.js", "razorpay", "borzo","wallet & refferal implementations"],
  },
  {
    title: "FakeCall: Celebrity Prank Call ",
    image: "/projects/project12.png",
    description:
      "Prank your friends with lifelike fake calls! FakeCall makes it seem like you're getting calls from celebrities. With realistic ringtones, animations, and call screens, you can create hilarious moments with ease.",
    link: "https://play.google.com/store/apps/details?id=com.evolvarc.fakecall",
    tags: ["Firebase", "Android", "kotlin","Android Jetpack Compose"]
  },  
  {
    title: "Textpilot",
    image: "/projects/project11.png",
    description:
      "TextPilot is a powerful system-wide AI text assistant that works across all your apps. Whether you're chatting, emailing, posting, or taking notes — TextPilot upgrades your writing instantly, without switching apps or copying text.",
    link: "https://play.google.com/store/apps/details?id=com.evolvarc.textpilot",
    tags: ["Android", "Kotlin", "Android Jetpack Compose", "SQLite", "system-wide AI assistant","Genkit"],
  },  
  {
    title: "MediMate AI",
    image: "/projects/project1.png",
    description:
      "An AI-powered virtual health assistant that streamlines patient care. It offers instant symptom checks, medication tracking, and health insights—effectively a personal ChatGPT for healthcare, designed to reduce consultation wait times.",
    link: "https://medimate-7od6.vercel.app/health-analysis",
    tags: ["Genkit", "Next.js", "Firebase", "Gemini"],
  },
  {
    title: "AutoFare - AI Bus Transit System",
    image: "/projects/project2.png",
    description:
      "A smart ticket verification and transit booking system leveraging real-time facial recognition. It eliminates fare evasion and speeds up boarding by verifying passenger selfies against CCTV frames using face-api.js.",
    link: "https://app--tsrtc-e-ticket-e7682f18.base44.app/login?from_url=https://app--tsrtc-e-ticket-e7682f18.base44.app/Auth&app_id=68550138c423788fe7682f18",
    subLinks: [
      {
        label: "Bus Booking App (Frontend)",
        url: "https://app--tsrtc-e-ticket-e7682f18.base44.app/login?from_url=https://app--tsrtc-e-ticket-e7682f18.base44.app/Auth&app_id=68550138c423788fe7682f18",
        icon: "🌐",
        description: "Passenger ticket booking portal with secure auth & transit dashboard",
        badge: "Next.js • Transit UI",
      },
      {
        label: "Face Engine (AI Backend)",
        url: "https://auto-fare.vercel.app/",
        icon: "⚡",
        description: "Real-time facial verification engine cross-matching passenger selfies & CCTV",
        badge: "face-api.js • Node.js",
      },
    ],
    tags: ["Face Recognition", "Next.js", "Node.js", "Genkit", "MongoDB"],
  },
  {
    title: "Sanctuary Sphere",
    image: "/projects/project5.png",
    description:
      "A visually immersive web experience built with pure HTML and Vanilla CSS, demonstrating that elegant design doesn't always require complex frameworks.",
    link: "https://sanctuary-sphere.vercel.app/",
    tags: [ "HTML", "CSS", "Spline"],
  },
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
    title: "Engine",
    link: "#remotion-engine",
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
