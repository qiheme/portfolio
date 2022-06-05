import React from "react";
import tw from "twin.macro";
import {css} from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/FullWidthWithImage.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Blog from "components/blogs/GridWithFeaturedPost.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import {NavLinks, NavLink as NavLinkBase} from "components/headers/light";

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

export default () => {
  return (
    <AnimationRevealPage>
      <Hero {...heroProps} />
      <FeatureStats />
      <Features
        heading={
          <>
            Amazing <HighlightedText>Features</HighlightedText>
          </>
        }
      />
      <MainFeature
        heading={
          <>
            Cloud built by and for{" "}
            <HighlightedText>Professionals</HighlightedText>
          </>
        }
      />
      <Testimonial
        heading={
          <>
            Our Clients <HighlightedText>Love Us</HighlightedText>
          </>
        }
      />
      <Pricing
        heading={
          <>
            Flexible <HighlightedText>Plans</HighlightedText>
          </>
        }
      />
      <FAQ
        heading={
          <>
            Any <HighlightedText>Questions ?</HighlightedText>
          </>
        }
      />
      <Blog
        subheading="Blog"
        heading={
          <>
            We love <HighlightedText>Writing</HighlightedText>
          </>
        }
      />
      <GetStarted />
      <Footer />
    </AnimationRevealPage>
  );
};
