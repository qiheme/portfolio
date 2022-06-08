import React from "react";
import tw from "twin.macro";

import Hero from "vendor/treact/components/hero/FullWidthWithImage.js";
import FeatureStats from "vendor/treact/components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import Footer from "vendor/treact/components/footers/MiniCenteredFooter.js";
import MainFeatureTwo from "vendor/treact/components/features/TwoColWithButton.js";
import ContactUsForm from "vendor/treact/components/forms/TwoColContactUsWithIllustrationFullForm.js";

import serverRedundancyIllustrationImageSrc from "vendor/treact/images/server-redundancy-illustration.svg";

import {
  NavLinks,
  NavLink as NavLinkBase,
} from "vendor/treact/components/headers/light";

import GithubIconImage from "vendor/feather-icons/github.svg";
import BriefcaseIcon from "vendor/feather-icons/briefcase.svg";
import PersonIcon from "vendor/feather-icons/user.svg";

import Content from "./content.json";

const HighlightedText = tw.span`text-primary-500`;
const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const navLinks = [
  <NavLinks key={1}>
    <NavLink href="#">About</NavLink>
    <NavLink href="#">Blog</NavLink>
    <NavLink href="#">Pricing</NavLink>
    <NavLink href="#">Login</NavLink>
  </NavLinks>,
];

const heading = (
  <>
    Engineer, Leader,
    <wbr />
    <br />
    <HighlightedText>Instructor, Speaker.</HighlightedText>
  </>
);

const heroProps = {navLinks, heading, ...Content["home"]["hero"]};

const cards = [
  {
    imageSrc: GithubIconImage,
    title: "Engineering Focused People Leader",
    description:
      "Focused on contributing to web applications and leading engineering teams for a Fortune 30 company",
  },
  {
    imageSrc: BriefcaseIcon,
    title: "EdTech Professional",
    description:
      "5+ years instructing and mentoring professionals in their career change journey",
  },
  {
    imageSrc: PersonIcon,
    title: "Community Champion",
    description:
      "Volunteering at various organizations devoted towards improving equity within the technology industry",
  },
  {
    imageSrc: PersonIcon,
    title: "Conference Speaker",
    description:
      "Speaking at conferences with a focus on the technology industry and people leadership",
  },
  {
    imageSrc: PersonIcon,
    title: "Freelance Developer",
    description:
      "Supporting small businesses with aims to reach there goals of engaging their customers",
  },
];

const featureProps = {cards, ...Content["home"]["features"]};

export default () => {
  return (
    <div>
      <Hero {...heroProps} />
      <FeatureStats {...featureProps} />
      <MainFeatureTwo
        {...Content["home"]["featuresTwo"]}
        imageSrc={serverRedundancyIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
      />
      <ContactUsForm />
      <Footer />
    </div>
  );
};
