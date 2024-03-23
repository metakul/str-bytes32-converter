import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ColorModeContext, useMode } from "./theme/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
// import { Toaster } from "react-hot-toast";
import  HomePage  from './Pages/HomePage';

import Router from "./Routes";

export default function App() {
  const [theme, colorMode] = useMode();
  return (
        <BrowserRouter>
          <Router />
        </BrowserRouter>

  );
}
