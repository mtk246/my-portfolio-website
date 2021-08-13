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
  skillBarProgressBackgroundColor: "#E23D55",
  iconColor: "#4B5563",
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
  skillBarProgressBackgroundColor: "#FFD523",
  iconColor: "#c4c4c4",
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

/// From AboutMe.jsx ///

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

/// From AboutMe.jsx ///

const SkillBarProgressDivColor = styled.div`
  background-color: ${(props) => props.theme.skillBarProgressBackgroundColor};
`;

const IconDiv = styled.div`
  color: ${(props) => props.theme.iconColor};
`;

function SkillBarProgressDiv(props) {
  return (
    <SkillBarProgressDivColor
      className="absolute top-0 h-4 rounded shim-green"
      style={props.progressBarStyle}
    ></SkillBarProgressDivColor>
  );
}

function SkillComponent(props) {
  const style1 = { width: props.progress1 + "%" };
  const style2 = { width: props.progress2 + "%" };
  const style3 = { width: props.progress3 + "%" };

  function SkillBarDiv() {
    return (
      <div className="flex flex-col w-full flex-1 my-4 lg:my-0">
        <div className="grid grid-cols-1 grid-rows-3 gap-4">
          <div className="relative w-full rounded m-auto flex flex-col md:flex-row items-start md:items-center px-0 md:px-8">
            <HeadingColor className="text-xl mx-4">
              {props.skillName1}
            </HeadingColor>
            <SkillBarProgressDiv
              progressBarStyle={style1}
            ></SkillBarProgressDiv>
          </div>
          <div className="relative w-full rounded m-auto flex flex-col md:flex-row items-start md:items-center px-0 md:px-8">
            <HeadingColor className="text-xl mx-4">
              {props.skillName2}
            </HeadingColor>
            <SkillBarProgressDiv
              progressBarStyle={style2}
            ></SkillBarProgressDiv>
          </div>
          <div class="relative w-full rounded m-auto flex flex-col md:flex-row items-start md:items-center px-0 md:px-8">
            <HeadingColor className="text-xl mx-4">
              {props.skillName3}
            </HeadingColor>
            <SkillBarProgressDiv
              progressBarStyle={style3}
            ></SkillBarProgressDiv>
          </div>
        </div>
      </div>
    );
  }
  return (
    <BodyContent className="body-content flex flex-col lg:flex-row shadow my-3">
      <div className="rounded-lg p-4 m-auto flex flex-none w-full md:w-1/2 lg:w-1/3">
        <HeadingColor className="text-lg md:text-xl font-extrabold">
          {props.skillTitle}
        </HeadingColor>
      </div>
      <SkillBarDiv className="ml-3" />
    </BodyContent>
  );
}

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
  SkillComponent,
  SkillBarProgressDiv,
  IconDiv,
};
