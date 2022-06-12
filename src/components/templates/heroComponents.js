import tw from "twin.macro";
import styled from "styled-components";
import {
  NavLinks,
  NavLink as NavLinkBase,
} from "vendor/treact/components/headers/light";

const HighlightedText = tw.span`text-primary-500`;
const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const logoLink = (
  <LogoLink href="/">
    <img
      src={"https://raw.githubusercontent.com/qiheme/headshots/master/icon.jpg"}
      alt="logo"
    />
  </LogoLink>
);

export const heading = (
  <>
    Engineer, Leader,
    <wbr />
    <br />
    <HighlightedText>Instructor, Speaker.</HighlightedText>
  </>
);

export const navLinks = [
  <NavLinks key={1}>
    {/* <NavLink href="#">About</NavLink>
    <NavLink href="#">Blog</NavLink> */}
  </NavLinks>,
];
