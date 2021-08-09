import { useState } from "react";
import Splash from "./components/SplashScreen";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "#E23D55",
  titleColor: "#fff",
  headingTextColor: "#fff",
  tagLineColor: "#fff",
  normalTextColor: "#595260",
  bannerHeadingTitle: "#fff",
  bannerHeadingName: "#4DD0E1",
  bodyBackground: "#C7D2FE",
  contactMeBackground: "#fff",
  buttonBackground: "#E23D55",
};

const DarkTheme = {
  pageBackground: "#2C2E43",
  titleColor: "#595260",
  headingTextColor: "#FFD523",
  tagLineColor: "#a4a4a5",
  normalTextColor: "#BFDBFE",
  bannerHeadingTitle: "#bfdbfe",
  bannerHeadingName: "#FFD523",
  bodyBackground: "#3e404f",
  contactMeBackground: "#2C2E43",
  buttonBackground: "#3e404f",
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
