import { Box, Button } from "@mui/material";
import CallSection from "./CallSection";
import NavBar from "./NavBar";

export default function NavMenu() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "secondary.light",
        px: "228px"
      }}
    >
      <Box sx={{ bgcolor: "secondary.main" }}>
        <CallSection />
      </Box>

      <NavBar />
    </Box>
  );
}
