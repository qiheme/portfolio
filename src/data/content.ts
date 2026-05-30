/*
 * Single source of truth for the site's content. Consolidates what used to live in
 * src/state.js plus the template files (heroComponents/featureComponents/contactComponents).
 * Plain data only — no JSX.
 */

export const hero = {
  // Heading is split so the second line can be highlighted in the primary color.
  headingLine1: "Engineer, Leader,",
  headingHighlight: "Instructor, Speaker.",
  description:
    "Hello! My name is Quincy Iheme and I am an Engineering Leader focused on team-building and advancing careers with more than 8 years of industry experience.",
  imageURL:
    "https://raw.githubusercontent.com/qiheme/headshots/master/IMG_8810.JPG",
  logoURL:
    "https://raw.githubusercontent.com/qiheme/headshots/master/icon.jpg",
};

export const features = {
  heading: "Focused on Personal and Professional Improvement",
  subheading: "",
  description: "",
  cards: [
    {
      icon: "/icons/github.svg",
      title: "Engineering Focused People Leader",
      description:
        "Focused on contributing to web applications and leading engineering teams for a Fortune 30 company",
    },
    {
      icon: "/icons/briefcase.svg",
      title: "EdTech Professional",
      description:
        "5+ years instructing and mentoring professionals in their career change journey",
    },
    {
      icon: "/icons/user.svg",
      title: "Community Champion",
      description:
        "Volunteering at various organizations devoted towards improving equity within the technology industry",
    },
    {
      icon: "/icons/mic.svg",
      title: "Conference Speaker",
      description:
        "Speaking at conferences with a focus on the technology industry and people leadership",
    },
    {
      icon: "/icons/zap.svg",
      title: "Freelance Developer",
      description:
        "Supporting small businesses who seek to digitally engage their customers with highly performant websites",
    },
  ],
};

export const featuresTwo = {
  subheading: "",
  heading: "Relaying Experiences to the Technology Community",
  description:
    "I spend my time at both internal and external events speaking about my experiences in the technology industry, and how we can all work together for the better.",
  imageSrc:
    "https://raw.githubusercontent.com/qiheme/headshots/master/3W1A9022.jpeg",
  textOnLeft: false,
};

export const contactForm = {
  subheading: "Contact Quincy",
  // Heading is split so "get in touch" can be highlighted in the primary color.
  headingBefore: "Feel free to ",
  headingHighlight: "get in touch",
  headingAfter: " with me.",
  description:
    "Use the below form to send a message to me. I'll get back to you shortly!",
  submitButtonText: "Send",
  email: "contact@quincyihe.me",
  illustration: "/illustrations/email-illustration.svg",
  textOnLeft: true,
};

export const footer = {
  logoText: "Quincy Iheme",
  links: [{ label: "Home", href: "#" }],
  twitterUrl: "https://twitter.com/codespeakteach",
  instagramUrl: "https://instagram.com/codespeakteach",
  copyright: "© Copyright 2022. All Rights Reserved.",
};

export const site = {
  title: "Quincy Iheme",
  description:
    "Quincy Iheme — Engineering Leader, EdTech professional, community champion, and conference speaker with 8+ years of industry experience.",
};
