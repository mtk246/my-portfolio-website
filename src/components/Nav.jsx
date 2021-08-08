import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.headingTextColor};
`;

export default function Nav() {
  return <Title className="text-indigo-600">This is from Nav Component</Title>;
}
