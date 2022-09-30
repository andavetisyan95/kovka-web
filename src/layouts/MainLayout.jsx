//react components
import Header from "./header";
import Footer from "./footer";
//Material UI
import { Box } from "@mui/material";
//react router
import { useLocation } from "react-router";

export default function MainLayout({ children }) {
  const location = useLocation();
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <main>
        <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
      </main>

      <Box>{location.pathname !== "/contacts" && location.pathname !== "/*" && <Footer />}</Box>
    </Box>
  );
}
