import React, {useContext} from "react";
import tw from "twin.macro";
import {AppContext} from "state";

import Hero from "vendor/treact/components/hero/FullWidthWithImage.js";
import FeatureStats from "vendor/treact/components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import Footer from "vendor/treact/components/footers/MiniCenteredFooter.js";
import MainFeatureTwo from "vendor/treact/components/features/TwoColWithButton.js";
import ContactUsForm from "vendor/treact/components/forms/TwoColContactUsWithIllustrationFullForm.js";

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;

export default () => {
  const {home} = useContext(AppContext);

  return (
    <StyledDiv className="App">
      <Hero {...home.hero} />
      <FeatureStats {...home.features} />
      <MainFeatureTwo {...home.featuresTwo} />
      <ContactUsForm {...home.contactForm} />
      <Footer />
    </StyledDiv>
  );
};
