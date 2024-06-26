import React from "react";

//react router
import { useLocation } from "react-router";

//Material UI
import { Box } from "@mui/material";

//react components
import Header from "./header";
import Footer from "./footer";
import { FixedCallButton } from "../components/common";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

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
      <FixedCallButton />
    </>
  );
}
