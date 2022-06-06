import React from "react";
import tw from "twin.macro";
import {css} from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import styled from "styled-components";

import Hero from "components/hero/FullWidthWithImage.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeatureTwo from "components/features/TwoColWithButton.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg";

import {NavLinks, NavLink as NavLinkBase} from "components/headers/light";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";

import GithubIconImage from "vendor/feather-icons/github.svg";
import BriefcaseIcon from "vendor/feather-icons/briefcase.svg";
import PersonIcon from "vendor/feather-icons/user.svg";

import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";

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
    <AnimationRevealPage>
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
    </AnimationRevealPage>
  );
};
