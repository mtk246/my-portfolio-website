import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#eee",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#7f7f7f",
  fontColor: "#eee",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;
