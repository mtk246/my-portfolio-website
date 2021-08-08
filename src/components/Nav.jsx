import React from "react";
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";

const Nav = styled.nav`
  background-color: ${(props) => props.theme.titleColor};
`;
export default function Navbar({ fixed }) {
  return <h1>Hello World</h1>;
}
