//react components
// import NavMenu from "./header/bar/NavMenu";

import Header from "./header";
//Material UI
import { Box } from "@mui/material";
import { useLocation } from "react-router";
import Footer from "./footer";

export default function MainLayout({ children }) {
  const location = useLocation();
  return (
    <Box position="relative">
      <Box>
        <Header />
      </Box>
      <Box>{children}</Box>
      <Box>{location.pathname !== "/contacts" && location.pathname !== "/*" && <Footer />}</Box>
    </Box>
  );
}
