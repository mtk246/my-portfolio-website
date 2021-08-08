import styled from "styled-components";

const H1 = styled.h1`
  color: ${(props) => props.theme.headingTextColor};
  transition: 0.5s ease;
`;

const ButtonDiv = styled.div`
  background-color: ${(props) => props.theme.tagLineColor};
  transition: 0.5s ease;
`;

export { H1, ButtonDiv };
