import { useState } from "react";
import Splash from "./components/SplashScreen";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "#F6ECF0",
  titleColor: "#A7C5EB",
  headingTextColor: "#949CDF",
  tagLineColor: "#949CDF",
  normalTextColor: "#eaeaea",
};

const DarkTheme = {
  pageBackground: "#2C2E43",
  titleColor: "#595260",
  headingTextColor: "#FFD523",
  tagLineColor: "#B2B1B9",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
