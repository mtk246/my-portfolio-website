import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import styled from "styled-components";

const BodyDiv = styled.div`
  background-color: ${(props) => props.theme.pageBackground};
`;

ReactDom.render(
  <BodyDiv>
    <App />
  </BodyDiv>,
  document.getElementById("root")
);
