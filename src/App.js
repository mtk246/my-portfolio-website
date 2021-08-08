import { useState } from "react";
import Splash from "./components/SplashScreen";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "#eaeaea",
  titleColor: "rgba(79, 70, 229)",
  headingTextColor: "#3f8cea",
  tagLineColor: "#000",
};

const DarkTheme = {
  pageBackground: "#536275",
  titleColor: "lightpink",
  headingTextColor: "#ede055",
  tagLineColor: "lavender",
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
