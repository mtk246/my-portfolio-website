import { useState } from "react";
import Splash from "./components/SplashScreen";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./components/const";

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
