import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ColorModeContext, useMode, themes } from "./themes/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <HelmetProvider>
          HI METAKUL
      </HelmetProvider>
    </ThemeProvider>
    </ColorModeContext.Provider>

  );
}