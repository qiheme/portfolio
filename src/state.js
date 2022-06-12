import {createContext} from "react";
import {
  heading,
  logoLink,
  navLinks,
} from "./components/templates/heroComponents";
import {featureCards} from "components/templates/featureComponents";
import {contactHeading} from "components/templates/contactComponents";

export const initialState = {
  home: {
    hero: {
      description:
        "Hello! My name is Quincy Iheme and I am an Engineering Leader focused on team-building and advancing careers with more than 8 years of industry experience.",
      primaryActionUrl: "#",
      primaryActionText: "Contact Quincy",
      secondaryActionUrl: "#",
      secondaryActionText: "Learn More",
      imageURL:
        "https://raw.githubusercontent.com/qiheme/headshots/master/IMG_8810.JPG",
      logoLink: logoLink,
      heading: heading,
      navLinks: navLinks,
    },
    features: {
      heading: "Focused on Personal and Professional Improvement",
      subheading: "",
      description: "",
      cards: featureCards,
    },
    featuresTwo: {
      subheading: "",
      heading: "Relaying Experiences to the Technology Community",
      description:
        "I spend my time at both internal and external events speaking about my experiences in the technology industry, and how we can all work together for the better.",
      imageSrc:
        "https://raw.githubusercontent.com/qiheme/headshots/master/3W1A9022.jpeg",
      buttonRounded: false,
      textOnLeft: false,
    },
    contactForm: {
      subheading: "Contact Quincy",
      description:
        "Use the below form to send a message to me. I'll get back to you shortly!",
      submitButtonText: "Send",
      formAction: "mailto:contact@quincyihe.me",
      formMethod: "get",
      textOnLeft: true,
      heading: contactHeading,
    },
  },
};

export const AppContext = createContext(initialState);
