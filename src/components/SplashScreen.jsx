import styled from "styled-components";
import { HiOutlineLightBulb, HiOutlineMoon } from "react-icons/hi";
import Banner from "./banner/Banner";
import BodyContent from "./BodyContent";

const Toggle = styled.button`
  background-color: ${(props) => props.theme.tagLineColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
`;

const Page = styled.div`
  ${"" /* background-color: ${(props) => props.theme.pageBackground}; */}
`;

const Container = styled.div``;

const Title = styled.h1`
  ${"" /* color: ${(props) => props.theme.titleColor}; */}
  ${"" /* className="transition duration-200 ease-in-out" */}
`;

const TagLine = styled.span`
  color: ${(props) => props.theme.tagLineColor};
  font-size: 18px;
  transition: all 0.5s ease;
`;

const BannerDiv = styled.div`
  ${
    "" /* background-color: ${(props) => props.theme.pageBackground};
  transition: 1s ease; */
  }
`;

export default function Splash(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? (
      <HiOutlineMoon size={30} className="mx-auto" />
    ) : (
      <HiOutlineLightBulb size={30} className="mx-auto" />
    );

  return (
    <BannerDiv>
      <Container className="flex flex-col items-center">
        <Toggle
          onClick={changeTheme}
          className="fixed bottom-4 right-4 cursor-pointer h-14 w-14 rounded-full border-0 transition duration-200 ease-in"
        >
          {icon}
        </Toggle>
      </Container>
      <Banner />
      <BodyContent />
    </BannerDiv>
  );
}
