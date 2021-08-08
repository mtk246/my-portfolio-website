import Nav from "./Nav";
import styled from "styled-components";

const BannerDiv = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
`;

export default function Banner() {
  return (
    <BannerDiv className="h-screen">
      <Nav />
    </BannerDiv>
  );
}
