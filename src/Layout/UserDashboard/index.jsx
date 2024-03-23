import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";

import { useMediaQuery } from "@mui/material";
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
  },
}));

export default function DashboardLayout() {

  const isNonMobile = useMediaQuery("(min-width: 766px)");


  return (
    <>
      <StyledRoot>
        <Main >
          <Outlet />
        </Main>
      </StyledRoot>
    </>
  );
}