/*
 * All site copy lives here. Every claim traces to Quincy's master resume or
 * career context pool (Notion). Keep internal Comcast business metrics
 * (orders, revenue) OFF this public site — they belong on the resume only.
 */

export const site = {
  title: "Quincy Iheme — Engineering Leader, Frontend Platforms & Design Systems",
  description:
    "Quincy Iheme is an engineering leader for frontend platforms, design systems and customer-facing web. He leads three teams (20+ engineers) behind Xfinity.com's marketing and customer acquisition experiences and the shared frontend platform other teams build on.",
  updated: "Nov 2026",
};

export const links = {
  email: "qiheme@gmail.com",
  linkedin: "https://www.linkedin.com/in/qiheme",
  github: "https://github.com/qiheme",
};

export const hero = {
  label: "Engineering Leader · Frontend Platforms & Design Systems",
  location: "Cherry Hill, NJ",
  headlineLead: "Engineering ambition",
  headlineAccent: "into operating rhythm.",
  bio: "I'm a senior engineering manager at Comcast. Through tech and team leads, I lead three teams, 20+ engineers, behind Xfinity.com's marketing and customer acquisition experiences and the shared frontend platform and design system other product teams build on. From SDET to senior engineering manager over 12 years, I've learned the job is turning big goals into a rhythm teams can ship on: clear ownership, platform work kept separate from feature delivery, steady releases, and engineers growing into leads.",
  image: "/headshot.jpg",
};

export const stats = [
  { value: "12+", label: "Years shipping web" },
  { value: "3 · 20+", label: "Teams · engineers led" },
  { value: "6 yrs", label: "Leading engineering teams" },
  { value: "~5 yrs", label: "Teaching web development" },
];

export type Project = {
  title: string;
  badge: string;
  badgeTone: "info" | "active";
  icon: "layers" | "box" | "cloud" | "film";
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Xfinity.com web platform",
    badge: "MY TEAMS",
    badgeTone: "info",
    icon: "layers",
    description:
      "My teams build and run Xfinity.com's marketing and customer acquisition apps and the shared frontend platform underneath them. I split platform work from feature delivery so the shared platform stayed healthy as features sped up, and turned shared components and utilities into a governed product with docs, triage and a US/India support rotation. We grew the Helix design system by 10+ components with CI quality gates and a biweekly release cadence, set up a standing design sync so new features reuse existing components, and stood up an AI delivery team that was an early adopter of agent instruction files and agent-written docs.",
    tags: ["React", "TypeScript", "Redux", "Sitecore", "SolidJS"],
    links: [{ label: "xfinity.com", href: "https://www.xfinity.com" }],
  },
  {
    title: "DragonLily Productions",
    badge: "CLIENT · LIVE",
    badgeTone: "active",
    icon: "film",
    description:
      "Marketing site for a video production company. I took the client's logo into Claude Design, built the whole experience from it in Astro and Tailwind, with a reel, producer bio and contact flow, and kept content in a lightweight layer in code so a CMS can be added later.",
    tags: ["Astro", "Tailwind", "Claude Design", "Netlify"],
    links: [
      { label: "dragonlilyproductions.com", href: "https://www.dragonlilyproductions.com" },
    ],
  },
  {
    title: "Cobalt",
    badge: "OPEN SOURCE",
    badgeTone: "active",
    icon: "box",
    description:
      "My personal design system and its React component library. This site is built on it. Dark-first, with a focus on component architecture, API design, and accessibility.",
    tags: ["React", "TypeScript", "Storybook"],
    links: [
      { label: "Storybook", href: "https://q-labs.github.io/cobalt" },
      { label: "GitHub", href: "https://github.com/q-labs/cobalt" },
    ],
  },
  {
    title: "Cloud129 studio site",
    badge: "SHIPPED",
    badgeTone: "info",
    icon: "cloud",
    description:
      "Site for Cloud 12Nine Technologies, the independent web studio I run. Built with Astro and deployed to Netlify through GitHub Actions.",
    tags: ["Astro", "Netlify", "GitHub Actions"],
    links: [{ label: "Visit site", href: "https://cloud-12nine.netlify.app" }],
  },
];

export type Talk = {
  year: string;
  event: string;
  title: string;
  note?: string;
  href?: string;
  linkLabel?: string;
};

export const talks: Talk[] = [
  {
    year: "2024",
    event: "Enterprise Technology Leadership Summit Europe (IT Revolution)",
    title: "First Time Engineering Manager Experiences at Comcast",
    note: "Co-presented",
    href: "https://videos.itrevolution.com/speakers/quincy-iheme",
    linkLabel: "Watch",
  },
  {
    year: "2021",
    event: "SCTE Cable-Tec Expo",
    title:
      "Strategies for Continuous Integration and Continuous Deployment at Scale at the Network Edge",
    note: "Presented and published technical paper",
  },
  {
    year: "2021",
    event: "BENgineers · Technically Speaking",
    title: "0 to 100 with GitHub",
    note: "Hands-on workshop",
    href: "https://youtu.be/UnksJcXt8V8",
    linkLabel: "Watch",
  },
  {
    year: "2020",
    event: "DevOpsDays NYC",
    title: "Don't Fail Fast. Learn Faster.",
    href: "https://youtu.be/C7TuyH4Aqxs",
    linkLabel: "Watch",
  },
  {
    year: "2019",
    event: "Innovation4All (Comcast)",
    title: "Why diversity in open source leads to better products",
    href: "https://youtu.be/7oF_BoJZD5E",
    linkLabel: "Watch",
  },
];

export const teaching = {
  title: "Teaching",
  body: "About five years teaching web development at the University of Pennsylvania, Rutgers University, and General Assembly. RailsBridge instructor and organizer.",
};

export const community = {
  title: "Community",
  body: "Co-led and later chaired BENgineers, a Comcast technology resource group, and spoke at its conference (~600 attendees, 2021). Organized LibertyJS for Philadelphia developers. Served on Comcast's Open Source Advisory Council. LeadDev proposal review board member and table talk host.",
};

export const capabilities = [
  {
    title: "Engineering leadership",
    items: [
      "Multi-team leadership and org design",
      "Hiring and onboarding",
      "Developing tech and team leads",
      "Product, Design and content partnership",
    ],
  },
  {
    title: "Platform engineering",
    items: [
      "Frontend architecture and design systems",
      "Shared components, services, data layer",
      "Governance and support models",
      "CMS integration (Sitecore)",
    ],
  },
  {
    title: "Product engineering",
    items: [
      "Customer acquisition and conversion",
      "Buyflow, cart, promotions",
      "Personalization",
    ],
  },
  {
    title: "Technologies",
    items: [
      "React, TypeScript, Redux",
      "Sitecore, SolidJS, Astro",
      "CI/CD: GitHub Actions, Cloud Foundry, Concourse, Jenkins",
      "AI-assisted delivery (agent instruction files)",
    ],
  },
];
