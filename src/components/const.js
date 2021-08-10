import styled from "styled-components";

const LightTheme = {
  pageBackground: "#E23D55",
  titleColor: "#fff",
  headingTextColor: "#fff",
  tagLineColor: "#fff",
  normalTextColor: "#fff",
  normalText2Color: "#2C2E43",
  bannerHeadingTitle: "#fff",
  bannerHeadingName: "#4DD0E1",
  bodyBackground: "#C7D2FE",
  bodyContentBackground: "#fff",
  buttonBackground: "#E23D55",
};

const DarkTheme = {
  pageBackground: "#232535",
  titleColor: "#595260",
  headingTextColor: "#FFD523",
  tagLineColor: "#FFD523",
  normalTextColor: "#BFDBFE",
  normalText2Color: "#C7D2FE",
  bannerHeadingTitle: "#bfdbfe",
  bannerHeadingName: "#FFD523",
  bodyBackground: "#292e49",
  bodyContentBackground: "#2C2E43",
  buttonBackground: "#3e404f",
};

/// From SplashScreen.jsx ///
const Toggle = styled.button`
  background-color: ${(props) => props.theme.tagLineColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
`;

/// From Nav.jsx ///

const H1 = styled.h1`
  color: ${(props) => props.theme.headingTextColor};
  ${"" /* transition: 0.5s ease; */}
`;

const ButtonDiv = styled.div`
  color: ${(props) => props.theme.tagLineColor};
  ${"" /* transition: 0.5s ease; */}
`;

const CardBodyUl = styled.ul`
  background-color: #2c2e43;
`;

const NormalText = styled.li`
  color: ${(props) => props.theme.normalTextColor};
  padding: 0 0.5rem;
  margin: 0.5rem 0;
`;

const NormalText2 = styled.li`
  color: ${(props) => props.theme.headingTextColor};
  padding: 0 0.5rem;
  margin: 0.5rem 0;
`;

/// From BannerContent.jsx ///

const BannerDiv = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
`;

const BannerHeadingTitle = styled.h1`
  color: ${(props) => props.theme.bannerHeadingTitle};
`;

const BannerHeadingName = styled.p`
  color: ${(props) => props.theme.bannerHeadingName};
  line-height: 1.5;
`;

/// From BodyContent.jsx ///

const BodySection = styled.div`
  background-color: ${(props) => props.theme.bodyBackground};
`;

const BodyContent = styled.div`
  background-color: ${(props) => props.theme.bodyContentBackground};
`;

const HeadingColor = styled.h1`
  color: ${(props) => props.theme.normalText2Color};
`;

const ParagraphColor = styled.p`
  color: ${(props) => props.theme.normalText2Color};
`;

const ButtonBackground = styled.div`
  background: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.headingTextColor};
`;

export {
  LightTheme,
  DarkTheme,
  Toggle,
  H1,
  ButtonDiv,
  CardBodyUl,
  NormalText,
  NormalText2,
  BannerDiv,
  BannerHeadingTitle,
  BannerHeadingName,
  BodySection,
  BodyContent,
  HeadingColor,
  ParagraphColor,
  ButtonBackground,
};
