//react components
import NavMenu from "./header/bar/NavMenu";
import Footer from "src/layouts/footer";
import Header from "./header";
//Material UI
import { Box } from "@mui/material";
import { useLocation } from "react-router";

export default function MainLayout({ children }) {
  const location = useLocation();
  return (
    <Box
      position="relative"
      // sx={{
      //   width: {
      //     xs: "0",
      //     sm: "21%",
      //     md: "54%",
      //     lg: "75%",
      //     xl: "100%"
      //   }
      // }}
    >
      <Box>
        <Header />
      </Box>

      <Box>{children}</Box>
      {location.pathname !== "/contacts" && <Footer />}
    </Box>
  );
}
