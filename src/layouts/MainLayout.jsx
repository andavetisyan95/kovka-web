//react hooks
import { useState } from "react";

//react router
import { useLocation } from "react-router";

//react components
import Header from "./header";
import Footer from "./footer";

//Material UI
import { Box, Hidden, Link } from "@mui/material";

//MUI icons
import PhoneIcon from "@mui/icons-material/Phone";

//constants
import { COMPANY_MAIN_PHONE_NUMBER } from "src/constants";

export default function MainLayout({ children }) {
  const location = useLocation();
  const [showAnimation, setShowAnimation] = useState(true);
  return (
    <>
      <Box>
        <Box height={200}>
          <Header />
        </Box>
        <main>
          <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
        </main>

        <Box>{location.pathname !== "/contacts" && location.pathname !== "/*" && <Footer />}</Box>
      </Box>
      <Hidden xlUp>
        <Link
          sx={{ textDecoration: "none", alignSelf: "center" }}
          href={`tel:${COMPANY_MAIN_PHONE_NUMBER}`}
          onMouseEnter={() => setShowAnimation(!showAnimation)}
          onMouseLeave={() => setShowAnimation(true)}
        >
          <Box
            className={showAnimation ? "flex_center circle" : "flex_center"}
            sx={{
              width: "70px",
              height: "70px",
              position: "fixed",
              border: "1px solid white",
              borderRadius: "100%",
              bottom: "30px",
              right: "30px"
            }}
          >
            <PhoneIcon
              sx={{
                color: "primary.light",
                fontSize: "1.8rem"
              }}
            />
            <Box
              className={showAnimation ? "flex_center pulse" : "flex_center"}
              sx={{
                width: "50px",
                height: "50px",
                position: "absolute",
                backgroundColor: "primary.main",
                zIndex: -1,
                borderRadius: "100%",
                transition: "all 1s ease 0s"
              }}
            />
          </Box>
        </Link>
      </Hidden>
    </>
  );
}
