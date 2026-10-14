/*
 * All site copy lives here. Every claim traces to Quincy's master resume or
 * career context pool (Notion). Keep internal Comcast business metrics
 * (orders, revenue) OFF this public site — they belong on the resume only.
 */

export const site = {
  title: "Quincy Iheme — Senior Engineering Manager",
  description:
    "Quincy Iheme leads engineering teams behind Xfinity.com's marketing and buyflow web apps and the shared component library other teams build on.",
  updated: "Oct 2026",
};

export const links = {
  email: "qiheme@gmail.com",
  linkedin: "https://www.linkedin.com/in/qiheme",
  github: "https://github.com/qiheme",
};

export const hero = {
  label: "Senior Engineering Manager · Comcast",
  location: "Cherry Hill, NJ",
  headlineLead: "Engineering ambition",
  headlineAccent: "into operating rhythm.",
  bio: "I lead three teams, about 18 engineers, behind Xfinity.com's marketing and buyflow web apps and the shared component library other teams build on. From SDET to senior engineering manager over 12 years, I've learned the job is turning big goals into a rhythm teams can ship on: clear ownership, steady releases, and engineers growing into leads.",
  image: "/headshot.jpg",
};

export const stats = [
  { value: "12+", label: "Years shipping web" },
  { value: "3 · ~18", label: "Teams · engineers led" },
  { value: "2 → 4", label: "Teams scaled in 2025" },
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
      "My teams build and run Xfinity.com's marketing and customer buyflow apps, plus the shared components, utilities, and data services underneath them. We grew the Helix design system, moved shared libraries to a governed model with docs and a support rotation, and put them on a steady release cadence.",
    tags: ["React", "TypeScript", "Redux", "Sitecore"],
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
      "The React component library for my Quincy OS design system, the system this site is built on. Dark-first, with a focus on component architecture, API design, and accessibility.",
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
    year: "2026",
    event: "LeadDev",
    title: "Proposal review board member and table talk host",
  },
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
  body: "Co-led and later chaired BENgineers, a Comcast technology resource group, and spoke at its conference (~600 attendees, 2021). Organized LibertyJS for Philadelphia developers. Served on Comcast's Open Source Advisory Council.",
};

export const capabilities = [
  {
    title: "Leadership",
    items: [
      "Multi-team org design",
      "Hiring and onboarding",
      "Coaching engineers into leads",
      "Product, Design and business partnership",
    ],
  },
  {
    title: "Platform & design systems",
    items: [
      "Shared component libraries",
      "Utilities, data layer, NPM packages",
      "Governance and support models",
    ],
  },
  {
    title: "Customer-facing web",
    items: [
      "Marketing surfaces",
      "Customer buyflow, carts, promotions",
      "Personalization",
      "CMS-driven content (Sitecore)",
    ],
  },
  {
    title: "Engineering & delivery",
    items: [
      "React, TypeScript, Redux",
      "Astro, SolidJS",
      "CI/CD: GitHub Actions, Jenkins, Concourse",
      "AI-assisted engineering",
    ],
  },
];
