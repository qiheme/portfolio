import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import Hero from "vendor/treact/components/hero/FullWidthWithImage.js";
import FeatureStats from "vendor/treact/components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import Footer from "vendor/treact/components/footers/MiniCenteredFooter.js";
import MainFeatureTwo from "vendor/treact/components/features/TwoColWithButton.js";
import ContactUsForm from "vendor/treact/components/forms/TwoColContactUsWithIllustrationFullForm.js";

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

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

const logoLink = (
  <LogoLink href="/">
    <img
      src={"https://raw.githubusercontent.com/qiheme/headshots/master/icon.jpg"}
      alt="logo"
    />
  </LogoLink>
);

const navLinks = [
  <NavLinks key={1}>
    <NavLink href="#">About</NavLink>
    <NavLink href="#">Blog</NavLink>
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

const heroProps = {
  navLinks,
  heading,
  logoLink: logoLink,
  ...Content["home"]["hero"],
};

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

const contactHeading = (
  <>
    Feel free to <span tw="text-primary-500">get in touch</span>
    <wbr /> with me.
  </>
);

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;

export default () => {
  return (
    <StyledDiv className="App">
      <Hero {...heroProps} />
      <FeatureStats {...featureProps} />
      <MainFeatureTwo
        {...Content["home"]["featuresTwo"]}
        buttonRounded={false}
        textOnLeft={false}
      />
      <ContactUsForm
        heading={contactHeading}
        {...Content["home"]["contactForm"]}
      />
      <Footer />
    </StyledDiv>
  );
};
